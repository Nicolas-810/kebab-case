import {
  collection,
  doc,
  getDoc,
  addDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "../../firebase.config";

class UserDAO {
  constructor() {
    this.collectionRef = collection(db, "users");
  }

  async getUserByEmail(email) {
    try {
      const userDoc = await getDoc(doc(this.collectionRef, email));
      if (userDoc.exists()) {
        return { success: true, data: userDoc.data() };
      } else {
        return { success: false, data: null };
      }
    } catch (error) {
      console.log("Error getting document:", error);
      return { success: false, data: null };
    }
  }

  async createUser(userData) {
    try {
      // Verificar si el usuario ya existe
      const userExists = await this.getUserByEmail(userData.email);

      if (userExists.success) {
        console.log("El usuario ya está registrado.");
        alert("Usuario registrado, Bienvenido " + userData.name); 

        return;
      }

      // Crear el nuevo usuario si no existe
      await setDoc(doc(this.collectionRef, userData.email), userData);
      console.log("Documento escrito con ID: ", userData.email);
    } catch (error) {
      console.error("Error al agregar documento: ", error);
    }
  }

  async updateUser(email, userData) {
    try {
      const userRef = doc(this.collectionRef, email);
      await setDoc(userRef, userData, { merge: true });
      console.log("Documento actualizado con éxito!");
    } catch (error) {
      console.error("Error al actualizar documento: ", error);
    }
  }

  async deleteUser(email) {
    try {
      await deleteDoc(doc(this.collectionRef, email));
      console.log("Documento eliminado con éxito!");
    } catch (error) {
      console.error("Error al eliminar documento: ", error);
    }
  }
}

export default new UserDAO();
