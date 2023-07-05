import React from "react";
import Rating from "../components/Rating";

const websiteProfile = [
  {
    id: 1,
    avatar:
      "https://media.licdn.com/dms/image/C5603AQFafMnqNHWdQA/profile-displayphoto-shrink_800_800/0/1660643623884?e=2147483647&v=beta&t=GHlkbKnotfReSrpA3eYjsIkuk9AKb3RWUwgbASHCZjk",
    nama: "Johanes",
    developer: "UI/IX Web Developer",
    app: "tiimi",
    image:
      "https://cdn.dribbble.com/userupload/3108912/file/original-8b705748299670a91da901d3868c90da.png?compress=1&resize=1024x768",
    description:
      "Tiimi is a Modern HR Management system that helps a business more efficiently manage their Teams, Job posting, Candidates, Hiring flow etc. Tiimi - Walkthrough - HR Management system designed by Bagus Fikri for Fikri Studio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis ad assumenda dolore, illo quisquam doloremque libero similique atque quibusdam voluptas ipsa quam laborum exercitationem omnis numquam iusto ducimus veritatis ipsum!",
    preview: {
      upload:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnks1mUpaezG_9uda0MyEOywjxyCHN0q3AJozUil0Wrr4M3XonHE6aPvl8S82hGY5e1yI&usqp=CAU",
      upload1:
        "https://cdn.dribbble.com/userupload/2741177/file/still-177ff197e8cde94794896987f271c013.png?resize=400x0",
      upload2:
        "https://cdn.dribbble.com/userupload/2769187/file/original-b095e1ed56d0f80fa2dc6f6b5f3fbe24.png?resize=400x0",
      upload3:
        "https://cdn.dribbble.com/userupload/2801416/file/original-811beaf9e1d26c39104952f44ff4a839.png?resize=400x0",
    },
  },
  {
    id: 2,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJNlvIu1hYQIDvhNWEk_RKo3nZIznuHJpBDg&usqp=CAU",
    nama: "Fernando",
    developer: "Web Developer",
    app: "Verce",
    image:
      "https://cdn.dribbble.com/userupload/4672357/file/original-948aa0f694060c5685388af1f8210ed2.png?compress=1&resize=1024x768",
    description:
      "Tiimi is a Modern HR Management system that helps a business more efficiently manage their Teams, Job posting, Candidates, Hiring flow etc. Tiimi - Walkthrough - HR Management system designed by Bagus Fikri for Fikri Studio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis ad assumenda dolore, illo quisquam doloremque libero similique atque quibusdam voluptas ipsa quam laborum exercitationem omnis numquam iusto ducimus veritatis ipsum!",
    preview: {
      upload:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0sA2XRqXlJD5oTCitVeHyfnxbUH9oKH1-eZuFTSDZXle68YeUS6PlzFpHa30tbdwvNNA&usqp=CAU",
      upload1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGn947SSr4Jv-1DFsnjS3GMPMxpi7WhQiCCT3dgyWdT7Jz-iMVw6Ob7-6IzW8v8FvoAjY&usqp=CAU",
      upload2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1RLj9keJ0XIHW-y1WMfzwb4x0784BTylpwwX-k9gxfpDYabGBUy_0t86z6Wsy37QyQoU&usqp=CAU",
      upload3:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxR44-saF-wrDsQzVFqiqveUy6lqBHBPnZNeKkLxQsJvzZxK8dFy4UyjseX7VBbgrNGtw&usqp=CAU",
    },
  },
];

function Website() {
  return (
    <div>
      {websiteProfile.map((profile) => (
        <div>
          <div className="grid grid-cols-6 gap-2 mt-10 mb-5">
            <div>
              <img
                className="rounded-full ml-20"
                src={profile.avatar}
                alt=""
                style={{ width: "100px", height: "100px" }}
              />
            </div>
            <div className="mt-5">
              <h1 className="text-green-600 font-bold text-2xl -ml-5">
                {profile.nama}
              </h1>
              <p className="text-gray-600 -ml-5 text-xs shadow mb-5">
                {profile.developer}
              </p>
              <div className="-ml-5 text-yellow-500">
                <Rating />
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div>
              <p className="text-center text-white font-bold text-xl mt-5 bg-green-800 w-20 p-1 rounded hover:text-green-800 hover:bg-green-200">
                {profile.app}
              </p>
            </div>
          </div>
          <img className="mx-auto mt-10" src={profile.image} alt="" />
          <div>
            <h1 className="text-green-600 font-bold text-2xl ml-20 my-10">
              Preview
            </h1>
            <div className="grid grid-cols-4 gap-4 mx-20 my-5">
              <img src={profile.preview.upload} alt="" />
              <img src={profile.preview.upload1} alt="" />
              <img src={profile.preview.upload2} alt="" />
              <img src={profile.preview.upload3} alt="" />
            </div>
          </div>
          <h1 className="text-green-600 font-bold text-2xl ml-20 my-10">
            Description
          </h1>
          <p className="mx-32 mb-10">{profile.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Website;
