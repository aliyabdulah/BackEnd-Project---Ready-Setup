import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: { 
    type: String, 
    required: true,
    unique: true,
    trim: true,
    minlength: [3, 'Username must be at least 3 characters'],
    maxlength: [30, 'Username cannot exceed 30 characters']
  },
  password: { 
    type: String, 
    required: true,
    minlength: [6, 'Password must be at least 6 characters']
  },
  profileImage: { 
    type: String, 
    default: null 
  }
}, {
  timestamps: true
});

const User = model("User", userSchema);
export default User;