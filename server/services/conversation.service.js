
export const doesConversationExist = async (sender_id, receiver_id) => {

    let convos = await ConversationModel.find({
        isGroup: false,
        $and: [
            { users: { $elemMatch: { $eq: sender_id } } },   //elematch use for searching data with users table
            { users: { $elemMatch: { $eq: receiver_id } } },
        ],
    }).populate("users", "-password").populate("latestMessage");

    if (!convos)
        throw createHttpError.BadRequest("Oops...Something went wrong !");

    //populate message model
    convos = await UserModel.populate(convos, {
        path: "latestMessage.sender",
        select: "name email picture status",
    });

    return convos[0];

}

export const createConversation = async (data) => {

    const newConvo = await ConversationModel.create(data);
    if (!newConvo)
        throw createHttpError.BadRequest("Oops...Something went wrong !");
    return newConvo;

}