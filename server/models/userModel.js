import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    default: "",
  },
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
