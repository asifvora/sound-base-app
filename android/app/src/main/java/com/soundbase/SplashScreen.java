package com.soundbase;

import android.content.Intent;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

// import com.facebook.react.ReactActivityDelegate;
// import com.facebook.react.ReactRootView;
// import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class SplashScreen extends AppCompatActivity {
    private static final int DELAY = 5000;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash_screen);

        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                Intent intent = new Intent(SplashScreen.this, MainActivity.class);
                startActivity(intent);
                finish();
            }
        }, DELAY);
    }
}
