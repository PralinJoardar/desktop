const posts = [
    { title: 'first post', body: 'this is first post' },
    { title: 'second post', body: 'this is second post' }
];

function getPosts() {
    setTimeout(() => {
        posts.forEach(data => {
            const output = data.title
            console.log(output)
        })
    }, 2000)

}
const createPost = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const flag = false;
            if (flag == false) {
                resolve(posts.push(post));

            } else {
                reject('something is wrong')
            }

        }, 3000)
    })


}
createPost({ title: 'third post', body: 'this is third post' })
    .then(getPosts)
    .catch(err => { console.log(err) })