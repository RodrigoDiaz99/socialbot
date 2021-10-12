<?php

namespace App\Http\Controllers;

use Abraham\TwitterOAuth\TwitterOAuth;
use App\Models\Twitter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TwitterController extends Controller
{
    private $consumerKey = 'WYkY0sSd6fqhafUhTIaNLZMSg';
    private $consumerSecret = 'IJqQNizw8XxvFGHmXFdNeNRAcEJuL9bOBBrDEDOfGvn2EhxNBI';
    private $var = 'message';
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

        //  $user_id = $request->user_id;
        $oauth_token = $token['oauth_token']; //access token
        $screen_name = $token['screen_name']; //access token
        $oauth_token_secret = $token['oauth_token_secret']; //token secret
        /**Save tokens  to database*/
        $save = Twitter::query()->updateOrCreate(
            [
                'user_id' => auth::user()->id,
                'twitter_screen_name' => $screen_name,
            ],

            [
                'twitter_oauth_token' => $oauth_token,
                'twitter_oauth_token_secret' => $oauth_token_secret,
            ]
        );
        //dd($save);
        return redirect()->route('twitter.index');
        // return $this->post($oauth_token,$oauth_token_secret);
    }
    public function twitter_post(Request $request)
    {
        $twitter = Twitter::query()->first();
        $message = $request->input('message');
        $hasFile = $request->hasFile('attachment'); //true or false
        $file = null; //set the file to

        if (!is_null($file)) {
            $file = $request->file('attachment');
        }


       return $this->postMessageToTwitter($twitter->twitter_oauth_token, $twitter->twitter_oauth_token_secret, $message,$file);

       // return redirect()->route('twitter.index');
    }
public function postMessageToTwitter($oauth_token, $oauth_token_secret, $message, $file = null) //file has default as null
    {
        $push = new TwitterOAuth($this->consumerKey, $this->consumerSecret, $oauth_token, $oauth_token_secret); //$file has default as null
        $push->setTimeouts(10, 15);
        $push->ssl_verifypeer = true;
        if (!empty($file)) { //if a file has been
       // $media=$push->upload('media/upload',['media'=>$file]);
       //error
          $media=$push->storage_path('app/public/twitter/' . $file);
           // dd($media);
            $parameters = [
                'status' => $message,
                'media_ids' => $media->media_id_string
            ];
            $push->post('statuses/update', $parameters); //push attachment with message to twitter status
        } else {
            $push->post('statuses/update', array('status' => $message)); //message without attachment
        }
        //$push->post('statuses/update', ['status' => $message]);
       // return response()->json($push->getLastbody());
        return redirect()->route('dashboard');
    }

}

//que procedera
