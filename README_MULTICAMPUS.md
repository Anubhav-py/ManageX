# ManageX – Multi-Campus Vector Map System (No Firebase Storage)

This version does not upload or use campus map images.

## How campuses are created

1. Sign in.
2. Open **Map → Add Campus**.
3. Enter the campus name, location and description.
4. Choose **Building** and drag rectangles onto the blank campus canvas.
5. Name each building when the drag is finished.
6. Choose **Road** and drag between points to add roads.
7. Use **Select** to select objects, rename buildings or delete objects.
8. Save the campus.

## Where the data is stored

Everything is stored as structured data in Cloud Firestore in the `campuses` collection:

- campus name/location/description
- drawing canvas size
- building rectangles, colors and names
- road start/end points and widths
- creator and created timestamp

No Firebase Storage is used.

## Why this works without Storage

The campus map is a vector scene, not an uploaded image. The viewer recreates the scene from Firestore data using SVG, so every building and road remains a real interactive object.

## Existing ITER map

The ITER map remains the existing hand-built detailed map and is still opened from `Map/index.html`.

## Firebase required

- Authentication: Email/Password
- Cloud Firestore
- Firestore rules that allow authenticated users to create/read campuses and owners to update/delete them.

Firebase Storage is not required.
