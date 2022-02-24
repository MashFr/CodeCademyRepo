// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (nbr, strand) => {
  return {
    specimenNum: nbr,
    dna: strand,
    mutate () {
      const randomDnaIndex = Math.floor(Math.random() * (this.dna.length - 1))
      const previousDna = this.dna[randomDnaIndex];
      this.dna[randomDnaIndex] = returnRandBase();
      while(this.dna[randomDnaIndex] === previousDna){
        this.dna[randomDnaIndex] = returnRandBase();
      };
    },
    compareDNA(otherPAequor) {
      let sameBaseAtSameLocation = 0
      for(let i = 0; i < this.dna.length; i ++){
        if(this.dna[i] === otherPAequor.dna[i]){
          sameBaseAtSameLocation++;
        }
      };
      console.log(`specimen #${this.specimenNum} and ${otherPAequor.specimenNum} have ${sameBaseAtSameLocation/this.dna.length*100} DNA in common`)
    },
    willLikelySurvive(){
      let numberOfCAndG = 0;
      for(let i=0; i<this.dna.length; i ++){
        if(this.dna[i] === 'C' || this.dna[i] === 'G'){
          numberOfCAndG++;
        }
      }
      if(numberOfCAndG/this.dna.length*100 >= 60){
        return true;
      } else {
        return false;
      }
    },
    complementStrand(){
      const complStrand = []
      for(let i=0; i<this.dna.length; i++){
        switch (this.dna[i]) {
          case 'A':
            complStrand.push('T')
            break;
          case 'T':
            complStrand.push('A')
            break;
          case 'C':
            complStrand.push('G')
            break;
          case 'G':
            complStrand.push('C')
            break;
        }
      }
      return complStrand
    }
  }
}

//test for 1 DNA
const firstDNA = pAequorFactory(1, mockUpStrand());
console.log(firstDNA.dna);
console.log(firstDNA.complementStrand());

const create30Instance = () => {
  const pAequor30 = []
  let i = 1;
  while(pAequor30.length < 30){
    let actualPAequor = pAequorFactory(i, mockUpStrand())
    if(actualPAequor.willLikelySurvive() === true){
      pAequor30.push(actualPAequor);
    }
    i++;
  }
  return pAequor30;
}

// console.log(create30Instance())
