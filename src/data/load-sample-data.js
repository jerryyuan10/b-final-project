import db from "./firebase";
import sampleData from "./sample-data.json";

async function loadSampleData() {
  sampleData.map(addBuilding);
}

async function addBuilding({ name, rating, completeYear, height, review, materials }) {
  try {
    const data = { name, rating, completeYear, height, review, materials };

    // Look up a building matching the name and complete year.
    const snapshot = await db
      .collection("buildings")
      .where("name", "==", name)
      .where("completeYear", "==", completeYear)
      .where("height", "==", height)
      .where("review", "==", review)
      .where("materials", "==", materials)
      // .where("location", "==", location)
      .get();

    // Create a doc reference that points to where this building is located in the DB - either a new
    // doc if it is not there, or the existing doc.
    let docRef;
    if (snapshot.empty) {
      docRef = db.collection("buildings").doc();
    } else {
      docRef = snapshot.docs[0].ref;
    }

    // Update the doc with the given data.
    await docRef.set(data);
  } catch (error) {
    console.log(error);
  }
}

export default loadSampleData;
