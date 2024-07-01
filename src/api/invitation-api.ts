import {addNewDoc} from "./firebase-app.ts";
import {Invitation} from "./models/Invitation.ts";

function addNewInvitation(invitation: Invitation) {
    addNewDoc<Invitation>("invitations", invitation)
}

export {addNewInvitation}
