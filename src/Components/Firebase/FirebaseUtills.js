import React from 'react'
import { db } from './firebase-config';
import { setDoc, doc, updateDoc, getDoc} from "firebase/firestore";
import {Timestamp } from "firebase/firestore";
import { auth } from './firebase-config';
import { onAuthStateChanged } from 'firebase/auth';

// Function to add a new user to the firebase user documents on sign up 
export async function AddingUserToFirebaseDatabase() {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      try {
        // The user is authenticated, proceed to add user data to Firestore
        await setDoc(doc(db, "users", user.uid), {
          gender: "",
          traininglvl: "",
          split: "",
          specialization: "",
          updatedAt: new Date()
        });
        console.log("Document written with ID: ", user.uid);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      console.log("No user is authenticated");
    }
  });
};

// Function to save user data for the user training lvl
export async function SaveUserDataTrainingLvl(userId, data) {
  const userDocRef = doc(db, 'users', userId);
  try {
    console.log("Saving data:", data); // Log data before saving

    // Try to update the document
    await updateDoc(userDocRef, { // this updates the users data using this specific preset syntax of choice and updated at
      traininglvl: data.traininglvl,
      updatedAt: data.updatedAt instanceof Timestamp ? data.updatedAt : Timestamp.now()
    });

    console.log('Document updated successfully');
  } catch (error) {
    console.error('Error updating document:', error);
  }
}

// Function to get user data for the user Training lvl
export async function GetUserDataTrainingLvl(userId) {
  const userDocRef = doc(db, 'users', userId);
  try {
    const docSnapshot = await getDoc(userDocRef);
    if (docSnapshot.exists()) {
      const data = docSnapshot.data();
      console.log('Document data:', data);
      return {
        traininglvl: data.traininglvl || '',
        updatedAt: data.updatedAt ? data.updatedAt.toDate() : new Date() // Convert Firestore Timestamp to JavaScript Date
      };
    } else {
      console.log('No such document!');
      return {
        traininglvl: '',
        updatedAt: new Date() // Default value
      };
    }
  } catch (error) {
    console.error('Error getting document:', error);
    return {
      traininglvl: '',
      updatedAt: new Date() // Default value
    };
  }}

  // Function to get user data for the user split
export async function SaveUserDataSplit(userId, data) {
  const userDocRef = doc(db, 'users', userId);
  try {
    console.log("Saving data:", data); // Log data before saving

    // Try to update the document
    await updateDoc(userDocRef, { // this updates the users data using this specific preset syntax of choice and updated at
      split: data.split,
      updatedAt: data.updatedAt instanceof Timestamp ? data.updatedAt : Timestamp.now()
    });

    console.log('Document updated successfully');
  } catch (error) {
    console.error('Error updating document:', error);

  }
}

// Function to get user data for the user split
export async function GetUserDataSplit(userId) {
  const userDocRef = doc(db, 'users', userId);
  try {
    const docSnapshot = await getDoc(userDocRef);
    if (docSnapshot.exists()) {
      const data = docSnapshot.data();
      console.log('Document data:', data);
      return {
        split: data.split || '',
        updatedAt: data.updatedAt ? data.updatedAt.toDate() : new Date() // Convert Firestore Timestamp to JavaScript Date
      };
    } else {
      console.log('No such document!');
      return {
        split: '',
        updatedAt: new Date() // Default value
      };
    }
  } catch (error) {
    console.error('Error getting document:', error);
    return {
      split: '',
      updatedAt: new Date() // Default value
    };
  }}

  // Function to save user data for the user gender
export async function SaveUserDataGender(userId, data) {
  const userDocRef = doc(db, 'users', userId);
  try {
    console.log("Saving data:", data); // Log data before saving

    // Try to update the document
    await updateDoc(userDocRef, { // this updates the users data using this specific preset syntax of choice and updated at
      gender: data.gender,
      updatedAt: data.updatedAt instanceof Timestamp ? data.updatedAt : Timestamp.now()
    });

    console.log('Document updated successfully');
  } catch (error) {
    console.error('Error updating document:', error);

  }
}

// Function to get user data for the user gender
export async function GetUserDataGender(userId) {
  const userDocRef = doc(db, 'users', userId);
  try {
    const docSnapshot = await getDoc(userDocRef);
    if (docSnapshot.exists()) {
      const data = docSnapshot.data();
      console.log('Document data:', data);
      return {
        gender: data.gender || '',
        updatedAt: data.updatedAt ? data.updatedAt.toDate() : new Date() // Convert Firestore Timestamp to JavaScript Date
      };
    } else {
      console.log('No such document!');
      return {
        gender: '',
        updatedAt: new Date() // Default value
      };
    }
  } catch (error) {
    console.error('Error getting document:', error);
    return {
      gender: '',
      updatedAt: new Date() // Default value
    };
  }}

