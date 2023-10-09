const accessKey="yJhlCYDZa0LhQmjVSbU0WDWsZbdt6zbUrVhlgLIDETs";
const searchForm=document.getElementById("search-form");
const searchBox=document.getElementById("search-box");
const searchResult=document.getElementById("search-result");
const searchMoreBtn=document.getElementById("searchMoreBtn");

console.log('show-more-btn :', searchMoreBtn);
let keyword="";
let page=1;
async function searchImages(){
    keyword=searchBox.value;
    console.log('KKE:', keyword);
    // const url='https://api.unsplash.com/search/photos?page=${page}1&query=&query=${keyword}office&client_id=${accessKey}';
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12.`;

const response = await fetch(url);
const data = await response.json();
if(page===1){
searchResult.innerHTML="";
}
 const results = data.results; 
 results.map((result)=>{
    const images=document.createElement("img");
    images.src=result.urls.small_s3;
    const imageLink=document.createElement("a");
    imageLink.href=result.links.html;
    imageLink.target="_blank";

    imageLink.appendChild(images);
    searchResult.appendChild(imageLink);
 })
 searchMoreBtn.style.display="block";
}
searchForm.addEventListener("submit",(e)=>{
e.preventDefault();
page=1;
searchImages();
})
searchMoreBtn?.addEventListener("click",()=>{
    page++;
    searchImages();
})