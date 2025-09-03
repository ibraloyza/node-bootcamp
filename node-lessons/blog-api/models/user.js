import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username:{
      type: String,
      require: true,
      trim: true,
      minlength: 3,
    },
    email:{
      type: String,
      unique: true,
      require: true,
      lowercase:true
    },
    password:{
      type: String,
      require: true,
      minlength: 6
    },
  },
  {timestamps: true}
)

export const User = mongoose.model("User",userSchema);