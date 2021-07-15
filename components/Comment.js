export default function Comment(comment) {
    console.log(comment);
    const hasNestedComment  = comment.comments.length > 0 ;
    // console.log(hasNestedComment)

    return `
    <div class="nested-comments-${comment.level}">
        <p class="comment-header">
            ${comment.user} | ${comment.time_ago}
            </p>
        ${comment.content}
        ${hasNestedComment ? comment.comments.map(comment => Comment(comment)).join('') : ''}
    </div>
    `
}