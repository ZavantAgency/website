export const mail: string = "zavant.agency@gmail.com";
export const aboutUs: string =
	"A remote design and development agency designing creative experiences for conversion and retention.";
export const active: boolean = true;

export const socials = [
	{
		name: "X",
		icon: "i-mingcute-social-x-line",
		link: "https://twitter.com/zavant_agency",
	},
	{
		name: "Instagram",
		icon: "i-bxl-instagram-alt",
		link: "https://www.instagram.com/zavant.agency/",
	},
	// {
	// 	name: "LinkedIn",
	// 	icon: "i-bxl-linkedin-square",
	// 	link: "https://www.linkedin.com/company/zavantagency/",
	// },
];

export const marqueeContent: string[] = [
	"Contact us through our social media channels, we will love to hear from you",
];

// an async function to fetch the download link from the server

// export const fetchDownloadLinks = async () => {
//   const data = await fetch(""")
//     .then(res => res.json())
//     .then(res => res?.data)
//     .catch(err => {
//       console.log(err);
//       // location.reload();
//       return {
//         android: "/404",
//         ios: "/404",
//       };
//     });
//   return {
//     android: data.android.storeUrl,
//     ios: data.ios.storeUrl,
//   };
// };

// export const osDownloadLink = async () => {
//   const fetched = await fetchDownloadLinks();
//   const userAgent = navigator.userAgent;
//   if (/android/i.test(userAgent)) {
//     return fetched?.android;
//   } else if (/iPad|iPhone|iPod/.test(userAgent)) {
//     return fetched?.ios;
//   } else {
//     console.log("Redirecting to the web version of the marketplace");
//     return import.meta.env.PUBLIC_MARKETPLACE_CTA_LINK;
//   }
// };

// export const Numbers = [""];
// export const Address = [
// 	{
// 		name: "",
// 		link: "",
// 	},
// ];
