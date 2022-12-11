import * as functions from "firebase-functions";
import * as admin from "firebase-admin"

admin.initializeApp();

export const https = functions.https;
export const db = admin.firestore();