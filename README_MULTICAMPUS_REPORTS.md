# ManageX Multi-Campus + Reports

## Campus-aware reporting
- report.html starts by asking the user to choose a campus.
- ITER Campus keeps the existing fixed building list.
- User-created campuses load only their saved building objects from Firestore.
- Roads are not selectable report locations.
- Every report stores campusId and campusName.
- reports.html groups reports by campus and includes a campus filter.
- Home Recent Issues includes the campus name.

## Firebase
Uses Firebase Authentication + Cloud Firestore. No Firebase Storage is required.
