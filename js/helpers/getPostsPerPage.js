export default function getPostsPerPage() {
    if (window.innerWidth <= 600) {
        return 1;  
    }
    return 3;     
}