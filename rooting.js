const judgeVegetable = function (vegetables, metric) {
let top = 0;
let submitter = '';

  for(let i = 0; i < vegetables.length; i++){
    if(vegetables[i][metric] > top){
      top = vegetables[i][metric];
      submitter = vegetables[i].submitter;
      console.log(submitter);
    }
    
  }

  
  return submitter;
}



const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric)
