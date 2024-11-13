export const serverConfig = {
    cookieName: "AuthToken",
    cookieSignatureKeys: ["AVuYwhrby45PqE3CPDLJcNBP463Cyfkm"],
    cookieSerializeOptions: {
        path: "/",
        httpOnly: true,
        secure: false, // Set this to true on HTTPS environments
        sameSite: "lax" as const,
        maxAge: 12 * 60 * 60 * 24, // Twelve days
      },
      serviceAccount: {
        projectId: "naf-admin-panel",
        clientEmail: "firebase-adminsdk-5myyy@naf-admin-panel.iam.gserviceaccount.com",
        privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDmLBkD0QL7q2sF\nmq3sDDpoUEt5i/dcouGZTj9RzApVh45bWAJeK8qz9I3X+gceY4rX9dQpm1bQF9fG\nLjvULq0eGqvbaJzBQu1vUOv7RJwabnLTMl7dDPVzVgu9C3ZZv4JV5XNeZ+SCBOhk\nAutFJcNiHqqZqmThDw/7SaX292Jqhr+Vd+dhfqtHoJVu4i+3I7yi7vQ2WMfc9H7C\nnDsuMPtalDImlnWP5zGF9j71o98/csllRgB7ADzXKiXQD8cLynGV8XSYWego85OX\nwsfTAikqM+A459rPuGUIs4FqBgbLf2z1nk6q7t9vMp63U4HX9BXLvRMKGM/W04Gy\nJU5pJTNZAgMBAAECggEAD03QTfooNh6UK5e4x7Cac5QfKJI/XLfxwxU6TZCBAWXV\nd8pWwfcsb6Grirgzn/gjY6+TLz8GWyiyrpklXjrKRO2mDp0aixkNm3CoeBj8Ph+o\n39UCDLWPXl9SwXuRH2+F1Xs/m//RaDm2T+wHw526q3v5gOUc9v/e4qjncY/KSeXS\nanrOOdJwgx7dvh0LFeYVADKmSFrd65+1nfKQKQPqQYMkvNovseyyRkqGmZwh5pGc\nP/o0duS7TmLlVBHcaMFIcG//gWARL7WxvNxKFBmmvyuCeKBSMuErtwGep0hWDDDT\nHxeUMJ3Z5gFwLFdk3qox9/G3Ajbr19/BUJKn2WKxBwKBgQD8Nnj+pN/yvGL3DP5U\nFusLbqztebhySN5cOUtZlBEMxw+iio+Jjo1Jwse4jqlHhPMzZkgg33T8h/xoQ41N\nz4IyL3s9dF3Ou0ogG2ee92UeuWh7aHZ4bcZaUm46XooqMiRvKlI7LiBhnqCWSF1K\n8gbVwyayhgY0p3PZA4ZwlXY0GwKBgQDpoOZAcSWW74/vOPvYZecnczLtzCgd+Qob\nRYm+hizIN5xH74Ok0vIVaU6bx255m5D0/Q49Emle2hveNypKyZAdsc+5KQDpxDTl\nR6gJX+7FIH+g2RdcfvInXwmjOmzU9caLAL9L2JIRIxBkY5b/syJaBZwbm238wBE/\nNTeH9l9lmwKBgFPgPb7Z0AxmsDbe4FnQwVws81+KgleneiOLfk6NGlp4fO+eSvwB\nJ2WnXEo5T3yUb1jhpA0io0I0azG1fXGqF+9esQqP/3539L/WvVA1kDB2kpOv+u4z\n+6ogDb5loGdGA63gkjZSMbylR1yTNkttT+6ZFu55+eha5AEA1h3s5sGPAoGAPQTu\nPnSO6c4mHMgYVxu+dPpMmflRnQp3jknqQR3QQnbr1YoEKx+BZQA9LMi43QA5qxMR\nDfhqFwEGeFKWNDRS9L6FT4obF/NMEXpWtCQfO9NSIlOxG1J4srnKzZwr4q9SrOmE\nDS5CcEFlPaMZRC2oUjTW4gsFfhc4KfcfSt6ZafMCgYEA69J4sYlELUA0Ndhz01O9\nh84/GHLlmE+yTLJf0wf5vUpiHaQKyS7OEFRdAMdUmD2tbCs6cNGi58vfZ5blX73r\nbVJSj6NTPLX74dh7isWdkfVqnJFx/GvDQMAWLOeUN+38nqXWiMldFOy3mil0Vnxi\ngutr3VyYIIEBt2tgsOETY9o=\n-----END PRIVATE KEY-----\n",
      },
  };
  
  export const clientConfig = {
    projectId: "naf-admin-panel",
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY as string,
    authDomain: "naf-admin-panel.firebaseapp.com",
    //databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    messagingSenderId: "685981322138",
  };