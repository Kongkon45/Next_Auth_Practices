import connectDB from "@/lib/connectDB"


export const POST = async (request) =>{
    try {
        const db = await connectDB();
        const userCollection = db.collection('users')
        const newUser = await request.json();
        const res = await userCollection.insertOne(newUser)
        console.log(res)
        return Response.json({message : "new user created"})
    } catch (error) {
        return Response.json({message : "something went wrong"})
    }
}