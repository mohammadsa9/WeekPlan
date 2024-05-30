const options = {
  margin: [10, 10, 10, 10],  // Adjust margins to zero for no extra space
  filename: 'plan.pdf',
  image: {
    type: 'jpeg',
    quality: 1
  },
  html2canvas: {
    scale: 2,
    scrollY: 0
  },
  jsPDF: {
    unit: 'px',
    orientation: 'portrait'
  }
};

async function createPDF() {
  let plan_name = document.querySelector('#plan-name').value;
  if (!plan_name) {
    plan_name = "plan";
  }
  let today = new Date();
  options.filename = `${plan_name}-${today.toISOString().slice(0, 10)}_${Number(today)}.pdf`;

  const element = document.querySelector('#pdfSection');
  const element_before = element.cloneNode(true);

  var colElems = element.querySelectorAll(".actions");

  for (var i = colElems.length - 1; i >= 0; i--) {
    colElems[i].remove();
  }

  element.querySelector('#table-wrapper1').classList.add("special-border");
  element.querySelector('#table-wrapper2').classList.add("special-border");

  var copyRightText = document.createElement("p");
  copyRightText.textContent = `This PDF was generated on ${window.location.host}`;
  copyRightText.classList.add("text-center");
  copyRightText.classList.add("mt-5");
  element.appendChild(copyRightText);

  // Wait for the DOM changes to be applied
  await new Promise(resolve => setTimeout(resolve, 100)); 

  var positionInfo = element.getBoundingClientRect();
  var height = positionInfo.height;
  var width = positionInfo.width;

  // Adjust width and height based on device pixel ratio
  var pixelRatio = window.devicePixelRatio || 1;
  width *= pixelRatio;
  height *= pixelRatio;

  // Set the PDF format based on the element's dimensions
  options.jsPDF.format = [width, height];

  // Generate and save the PDF
  await html2pdf().from(element).set(options).save();

  // Restore the original element
  element.replaceWith(element_before);
}
