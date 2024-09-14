export async function PATCH(request, {params}){
    const body = await request.json();
    const comment = comments.findIndex((c)=> c?.id === parseInt(params?.id))
    comments[comment] = {
        id : body.id,
        text : body.text
    }
    return Response.json({
        message : "comments updated",
        comments
    })
}


export async function DELETE(request, {params}){
    const newComments = comments?.filter((c)=> c?.id !== parseInt(params?.id))

    return Response.json({
        message : "comment deleted",
        newComments
    })
}


const comments = [
    {
        id : 1,
        text : 'comment1'
    },
    {
        id : 2,
        text : 'comment2'
    },
    {
        id : 3,
        text : 'comment3'
    },
    {
        id : 4,
        text : 'comment4'
    },
]