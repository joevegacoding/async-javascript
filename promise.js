// const promise = new Promise((resolve, reject)=> {
//     setTimeout(() => {
//         console.log('got the user')
//         // resolve({user: "Jose"})
//         reject(new Error('could not display'))
//     }, 2000);
// })

// promise.then(res => {
//     console.log(res.user);
// }).catch(err => console.log(`${err.name}: ${err.message}`))

console.log("Start");

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Now we are in the timout function");
      resolve({ userEmail: email });
    }, 3000);
  });
}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["video1", "video2", "video3"]);
    }, 2000);
  });
}

function videoDetails(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("title of the video");
    }, 2000);
  });
}

// Login User

// loginUser('josephB@gmail.com', "test1234")
// .then(user => getUserVideos(user.email))
// .then(videos => videos[0])
// .then(detail => console.log(detail))

// const user =  loginUser('joseph', 'pizza')
// const videos = videoDetails(user.email)

const youtube = new Promise((res) => {
  setTimeout(() => {
    console.log("getting stuf from youtube");
    res({ videos: [1, 2, 3, 4, 5] });
  }, 2000);
});

const faceook = new Promise((res) => {
  setTimeout(() => {
    console.log("getting stuf from youtube");
    res({ posts: [1, 2, 3, 4, 5] });
  }, 2000);
});

Promise.all([youtube, faceook]).then((result) => console.log(result))

