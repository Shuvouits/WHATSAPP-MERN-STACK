import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

/*Object Id here works as similar types of mysql foreign key. it provides realtion between others table and if you used populate(), then you
get (users, latestMessage, admin) data  */

const conversationSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Conversation is required."],
      trim: true,
    },
    isGroup: {
      type: Boolean,
      required: true,
      default: false,
    },
    users: [
      {
        type: ObjectId,
        ref: "UserModel",
      },
    ],
    latestMessage: {
      type: ObjectId,
      ref: "MessageModel",
    },
    admin: {
      type: ObjectId,
      ref: "UserModel",
    },
  },
  {
    collection: "conversations",
    timestamps: true,
  }
);

const ConversationModel =
  mongoose.models.ConversationModel ||
  mongoose.model("ConversationModel", conversationSchema);

export default ConversationModel;