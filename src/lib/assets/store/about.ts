export const mail: string = "zavant.design@gmail.com";
export const aboutUs: string =
	"We are a remote design and development agency designing creative experiences for conversion and retention on the web";
export const active: boolean = true;

export const socials = [
	{
		name: "X",
		icon: "i-mingcute-social-x-line",
		link: "https://twitter.com/zavant_design",
	},
	{
		name: "Instagram",
		icon: "i-bxl-instagram-alt",
		link: "https://www.instagram.com/zavant.design/",
	},
	{
		name: "LinkedIn",
		icon: "i-bxl-linkedin-square",
		link: "http://linkedin.com/company/zavantdesign",
	},
];

export const marquee: string[] = [
	"Contact us through our social media channels, we will love to hear from you",
];

// an async function to fetch the download link from the server

// export const fetchDownloadLinks = async () => {
//   const data = await fetch("https://marketplace.netapps.ng/api/v1/version")
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

// export const Numbers = ["+234 906 567 8575", "+234 915 121 6060"];
// export const Address = [
// 	{
// 		name: "4 Kenema Close, Off Sakono Street, Off Ademola-Adetokunbo Street, Wuse 2, F.C.T - Abuja, Nigeria",
// 		link: "https://goo.gl/maps/uk6nqsyAQuz563Nj9",
// 	},
// ];
