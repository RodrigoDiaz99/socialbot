<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Abraham\TwitterOAuth\TwitterOAuth;

use App\Models\Twitter;
use Facebook\Authentication\AccessToken;
use Illuminate\Support\Facades\Auth;

class TwitterController extends Controller
{
    private $consumerKey = 'WYkY0sSd6fqhafUhTIaNLZMSg';
    private $consumerSecret = 'IJqQNizw8XxvFGHmXFdNeNRAcEJuL9bOBBrDEDOfGvn2EhxNBI';
     public function index()
    {
        $twitter = Twitter::query()->first();
        //  dd($twitter);
        return view('twitter.index', compact('twitter'));
    }

public function login(Request $request)
    {
        /** @var Callback Url $callback */
        $callback = route('cbk');

        /** @var establishing twitter connection $_twitter_connect */
        $_twitter_connect = new TwitterOAuth($this->consumerKey, $this->consumerSecret);

        /** @var $access_token get access token */
        $_access_token = $_twitter_connect->oauth('oauth/request_token', ['oauth_callback' => $callback]);

        /** @var generate a new url for client $_route */
        $_route = $_twitter_connect->url('oauth/authorize', ['oauth_token' => $_access_token['oauth_token']]);

        return redirect($_route);
    }
    public function cbk(Request $request)
    {
        $response = $request->all();
        //  $user_id=$response['user_id'];
        $oauth_token = $response['oauth_token'];
        $oauth_verifier = $response['oauth_verifier'];
        $_twitter_connect = new TwitterOAuth($this->consumerKey, $this->consumerSecret, $oauth_token, $oauth_verifier);
        $token = $_twitter_connect->oauth('oauth/access_token', ['oauth_verifier' => $oauth_verifier]);
        //dd($)

        $user_id = $request->user_id;
        $oauth_token = $token['oauth_token']; //access token
        $screen_name = $token['screen_name']; //access token
        $oauth_token_secret = $token['oauth_token_secret']; //token secret
        /**Save tokens  to database*/
        $save = Twitter::query()->updateOrCreate(

            [
                'user_id' => Auth::id(),
                'twitter_screen_name' => $screen_name
            ],

            [
                'twitter_oauth_token' => $oauth_token,
                'twitter_oauth_token_secret' => $oauth_token_secret
            ]

        );
        //dd($save);
        return redirect()->route('twit.index');
        // return $this->post($oauth_token,$oauth_token_secret);
    }
    public function post($oauth_token, $oauth_token_secret, $message)
    {
        $push = new TwitterOAuth($this->consumerKey, $this->consumerSecret, $oauth_token, $oauth_token_secret);
        $push->setTimeouts(10, 15);
       $push->ssl_verifypeer=true;
        $push->post('statuses/update', ['status' => $message]);
       // dd($push->getLastHttpCode());
      // dd($push->getLastXHeaders(),$push->getLastBody());
        return redirect()->route('dashboard');
    }
    public function twitter_post(Request $request)
    {
        $twitter = Twitter::query()->first();
        $message = $request->input('message');
        //dd($message);
        $this->post($twitter->twitter_oauth_token, $twitter->twitter_oauth_token_secret, $message);
        return redirect()->route('dashboard');
    }
}
