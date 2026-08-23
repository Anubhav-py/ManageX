# MaintainX

Campus maintenance and grievance reporting frontend.

## Requirements

- A modern web browser
- VS Code with the **Live Server** extension, or Python 3

## Run Locally

### Option 1: VS Code Live Server

1. Open the `ManageX` folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.
5. Open:

```text
http://127.0.0.1:5500/
```

### Option 2: Python

Open a terminal in the project folder and run:

```powershell
python -m http.server 5500
```

Then open:

```text
http://localhost:5500/
```

## Firebase

MaintainX uses **Firebase Authentication** for login and signup.

No Firebase or npm installation is required. The Firebase Web SDK is loaded directly from Google's CDN.

Make sure **Email/Password** authentication is enabled in the Firebase project.

Firebase documentation:  
https://firebase.google.com/docs/auth/web/start

## Main Pages

| Page | Purpose |
|---|---|
| `index.html` | Homepage |
| `login.html` | Login |
| `signup.html` | Sign up |
| `user.html` | User profile and logout |
| `Map/index.html` | Campus map |
| `report.html` | Report an issue |

## Troubleshooting

If the site does not load, run it through **Live Server** or a local Python server instead of opening the HTML file directly.

If Firebase login does not work, check that **Email/Password Authentication** is enabled in Firebase Console.

After changing files, refresh with:

```text
Ctrl + Shift + R
```
