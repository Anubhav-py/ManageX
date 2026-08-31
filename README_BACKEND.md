# ManageX backend setup

1. `firebase.js` uses the new `maintai-x-f1` Firebase project.
2. Enable Authentication > Email/Password.
3. Create Cloud Firestore.
4. Publish the contents of `firestore.rules` in Firestore > Rules.
5. Run this project with VS Code Live Server.
6. Log in, submit a report, then open Reports. The Home page and Reports page read live from the `reports` collection.

Photo evidence is currently stored as the selected filename only; persistent image uploads would require Firebase Storage.
