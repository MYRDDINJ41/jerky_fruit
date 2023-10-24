import mongoose from "mongoose";

const userShema = new mongoose.Schema(
  {
    username: {
      type: String, // Tipo de dato
      required: true, // Esto es que siempre, siempre sea requerido el espacio.
      trim: true, //Elimina los espacios dentro del String.
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('User', userShema);