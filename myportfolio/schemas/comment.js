export default {
    name: "comment",
    type: "document",
    title: "Comment",
    fields: [
        {
            name: "name",
            type: "string",
        },
        {
            title: "Approved",
            name: "approved",
            type: "boolean",
            description: "Unapproved comments won't show on you blog."
        },
        {
            name: "email",
            type: "string",
        },
        {
            name: "comment",
            type: "text",
        },
        {
            name: "post",
            type: "reference",
            to: [{ type: "post" }],
        },
    ],
};