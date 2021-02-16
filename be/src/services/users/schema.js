const { Schema, model } = require("mongoose");
const bycript = require("bcryptjs");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    email: {
      type: String,
      enum: ["admin", "user"],
      required: true,
    },
  },
  { timestamps: true }
);

// UserSchema.statics.findByCredentials = async function(email, password) {
//     const user = await this.findOne({email})
// }

module.exports = mdoel("user", UserSchema);
