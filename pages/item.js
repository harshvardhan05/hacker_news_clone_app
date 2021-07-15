import view from "../util/view.js";
import Story from "../components/Story.js";
import baseUrl from "../util/baseUrl.js";
import Comment from "../components/Comment.js";

export default async function Item() {
   let story = null ;
   let hasComments = false;
   let hasError = false;
   try {
    story = await getStory();
    // console.log(story);
    hasComments  = story.comments.length > 0;
   } catch (error) {
    hasError = true;
    console.log(error);   
   } 
    if(hasError) {
        view.innerHTML = `<div>Error while fetching Story</div>`
    }
    view.innerHTML = `
    <div>
        ${Story(story)}
    </div>
    <hr />
    <div>
    ${hasComments ? story.comments.map(comment => Comment(comment)).join('') : 'No Comments'}
    </div>
    `
}

async function getStory() {
    const storyId = window.location.hash.split('?id=')[1];
    // console.log(storyId)
    const response = await fetch(`${baseUrl}/item/${storyId}`);
    // console.log(response)
    const story = await response.json();
    // console.log(response);
    return story;

}
