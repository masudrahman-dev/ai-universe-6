const aiTools = 'https://openapi.programming-hero.com/api/ai/tools';

// const dataSlice = (data) => {
//   let dataSlice = data.data.tools.slice(0, 6);
//   displayData(dataSlice);
// };
// const dataAll = (data) => {
//   const AllShowData = data.data.tools;
//   displayData(AllShowData);
// };

// document.getElementById('showDataAll').addEventListener('click', () => {
//   fetch(aiTools)
//     .then((res) => res.json())
//     .then((data) => dataGet(data));
//   spinner(true);
//   const dataGet = (data) => {
//     dataAll(data);
//   };
// });
const getAllData = () => {
  fetch(aiTools)
    .then((res) => res.json())
    .then((data) => {
      displayData(data.data.tools);
      // featuresList(data.data.tools);
    });
  // spinner(true);

  // const card_box = document.getElementById('card_box');
  // card_box.innerHTML = '';
  // if (5 < displayData.length) {
  //   document.getElementById('showDataAll').classList.remove('d-none');
  // } else {
  //   document.getElementById('showDataAll').classList.add('d-none');
  // }

  // const featuresList = document.getElementById('featuresList');
  // displayData.features.forEach((fea) => {
  //   console.log(fea);
  // });

  // spinner(false);
};

{
  /* <li>${features[0]}</li>
<li>${features[1]}</li>
<li>${features[2]}</li> */
}

const card_box = document.getElementById('card_box');
const displayData = (data) => {
  let ol_id = 0;
  data.forEach((element) => {
    const { image, name, published_in, features, id } = element;
    // console.log(features);
    // const obj = features.reduce((acc, curr, index) => {
    //   acc[index] = curr;
    //   return acc;
    // }, {});
    // const { 0: one, 1: two, 2: three, 3: four } = obj;
    // console.log(obj); // {0: "one", 1: "two", 2: "three"}

    const card_div = document.createElement('div');
    card_div.classList.add('col', 'card_div');
    card_div.innerHTML = `
    <div class="card shadow-sm">
    <img src="${image}" class="img-fluid rounded m-3" alt="...">
    <div class="card-body">
    <h5 class="card-title">Features</h5>
           <ol id="ol_id_${ol_id++}" >
        
            </ol>
         <hr>
        <div class="d-flex align-items-center justify-content-between">
            <div>
                <h4 class="fw-bold">${name}</h4>            
                <p>${published_in}</p>
            </div>

            <span onclick="modal_data('${id}')" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img class="shadow-sm rounded-pill" src="./images/datails-icon.svg" alt="">
            </span>
        </div>
    </div>
    </div>
    `;
    card_box.appendChild(card_div);
  });

  featuresList(data);
};

getAllData();

const featuresList = (data) => {
  // console.log(data);
  // const dataSlice = data.slice(0, 9);
  // console.log(slc);
  let ol_id = 0;
  data.forEach((element) => {
    // console.log(element.features);
    // const eleSlice = element.features.slice(0, 5)
    const ol = document.getElementById('ol_id_' + ol_id++);
    element.features.forEach((ele) => {
      // console.log(ele);
      const li = document.createElement('li');
      // console.log(ol);
      li.innerHTML = ele;
      ol.appendChild(li);
      console.log(ol);
    });
  });
};

// const separate = (element) => {
//   const arrayOnly = element.filter((item) => Array.isArray(item));
//   const objectOnly = element.filter(
//     (item) => typeof item === 'object' && !Array.isArray(item)
//   );
//   console.log(arrayOnly); // [[5, 6]]
//   console.log(objectOnly); // [{ name: "John", age: 25 }]
// };
// const card_ol = (ol) => {
//   // console.log(ol);
// };
// const features_element = (ele) => {
//   // console.log(ele);
//   ele.forEach((fea) => {
//     const li = document.createElement('li');
//     li.innerHTML = fea;
//     // console.log(li);
//   });
// };

// const modal_data = (id) => {
//   const modal_data = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
//   console.log(modal_data);
//   fetch(modal_data)
//     .then((res) => res.json())
//     .then((modal_data) => {
//       show_modal(modal_data.data);
//     });
// };

// const show_modal = (modal_data) => {
//   // console.log(modal_data);
//   const { accuracy, description, image_link, features, input_output_examples } =
//     modal_data;

//   // console.log(accuracy.score === null);

//   const features_data = Object.values(features);

//   const modal_body = (document.getElementById('modal_body').innerHTML = `

//   <button type="button"
//   class="btn-close rounded-pill bg-warning p-3 position-absolute top-0 start-100 translate-middle"
//   data-bs-dismiss="modal" aria-label="Close">
//   </button>

//  <div class="d-flex gap-3 flex-column flex-xl-row">

//   <div class="order-1 order-xl-0">
//       <h4 class="display-6 fw-bold text-light text-center text-xl-start ">${description}</h4>

//       <div id="price_box" class="d-flex gap-3 text-center my-5">

//       </div>
//       <div class="">
//           <div class="row mt-5 text-light">
//               <div class="col">
//                   <h5>Features</h5>
//                   <ul id="featuresListModal">

//                   </ul>
//               </div>
//               <div class="col">
//                   <h5>Integrations</h5>
//                   <ul id="modal_Integrations">

//                   </ul>
//               </div>
//           </div>

//       </div>

//   </div>

//   <div class="order-0 order-xl-1">
//       <div class="position-relative">
//           <button id="modal_accuracy" class="btn btn-primary mt-3 me-3 position-absolute top-0 end-0">${
//             accuracy.score === null
//               ? 'not found'
//               : accuracy.score + '%' + ' accuracy'
//           }
//              </button>
//           <img class="img-fluid rounded" src="${image_link[0]}" alt="">
//       </div>
//       <div class="text-light text-center mt-3">
//           <h4>${
//             input_output_examples === null
//               ? 'not found'
//               : input_output_examples[0].input
//           }</h4>
//           <p>${
//             input_output_examples === null
//               ? 'not found'
//               : input_output_examples[0].output
//           }</p>
//       </div>

//   </div>
// </div>

//   `);
//   // Modal features
//   const featuresListModal = document.getElementById('featuresListModal');
//   // console.log(modal_data.features);
//   const features_data_arr = Object.values(modal_data.features);
//   // console.log(features_data_arr);

//   features_data_arr.forEach((ele) => {
//     // console.log(ele.feature_name);
//     // console.log(ele.feature_name.length);
//     if (ele.feature_name) {
//       const li = document.createElement('li');
//       li.innerText = ele.feature_name;
//       featuresListModal.appendChild(li);
//     } else {
//       const li = document.createElement('li');
//       li.innerText = 'not found';
//       featuresListModal.appendChild(li);
//     }
//   });

//   // Modal integrations
//   const modal_Integrations = document.getElementById('modal_Integrations');

//   if (modal_data.integrations === 0 || modal_data.integrations === null) {
//     const li = document.createElement('li');
//     li.innerText = 'not found';
//     modal_Integrations.appendChild(li);
//   } else {
//     modal_data.integrations.forEach((ele) => {
//       // console.log(ele);
//       const li = document.createElement('li');
//       li.innerText = ele;
//       modal_Integrations.appendChild(li);
//     });
//   }

//   // modal_accuracy
//   // console.log(modal_data.pricing);
//   // console.log(modal_data.pricing);
//   const price_box = document.getElementById('price_box');
//   if (modal_data.pricing === null || modal_data.pricing.length === 0) {
//     const basic = document.createElement('div');
//     basic.setAttribute('class', 'text-success bg-white fw-bold p-3 rounded');
//     basic.innerHTML = ' Free of Cost';
//     const pro = document.createElement('div');
//     pro.setAttribute('class', 'text-success bg-white fw-bold p-3 rounded');
//     pro.innerHTML = ' Free of Cost';
//     const enterprise = document.createElement('div');
//     enterprise.setAttribute(
//       'class',
//       'text-success bg-white fw-bold p-3 rounded'
//     );
//     enterprise.innerHTML = ' Free of Cost';
//     price_box.appendChild(basic);
//     price_box.appendChild(pro);
//     price_box.appendChild(enterprise);
//   } else {
//     modal_data.pricing.forEach((ele) => {
//       console.log(ele.plan);
//       const basic = document.createElement('div');
//       basic.setAttribute('class', 'text-success bg-white fw-bold p-3 rounded');
//       basic.innerHTML = ` ${ele.price} ${ele.plan} `;
//       price_box.appendChild(basic);
//     });
//   }
// };

// function spinner(isLoading) {
//   if (isLoading) {
//     document.getElementById('spinner').classList.remove('d-none');
//   } else {
//     document.getElementById('spinner').classList.add('d-none');
//   }
// }

//  separate an array and an object from a mixed array

// const mixedArray = [1, 'two', { name: 'John', age: 25 }, 'four', [5, 6]];
// const arrayOnly = mixedArray.filter((item) => Array.isArray(item));
// const objectOnly = mixedArray.filter(
//   (item) => typeof item === 'object' && !Array.isArray(item)
// );
// console.log(arrayOnly); // [[5, 6]]
// console.log(objectOnly); // [{ name: "John", age: 25 }]

// const mixedArray = [1, "two", { name: "John", age: 25 }, "four", [5, 6]];
// let arrayOnly = [];
// let objectOnly = [];
// for (let i = 0; i < mixedArray.length; i++) {
//   if (Array.isArray(mixedArray[i])) {
//     arrayOnly.push(mixedArray[i]);
//   } else if (typeof mixedArray[i] === "object" && !Array.isArray(mixedArray[i])) {
//     objectOnly.push(mixedArray[i]);
//   }
// }
// console.log(arrayOnly); // [[5, 6]]
// console.log(objectOnly); // [{ name: "John", age: 25 }]
