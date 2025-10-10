class User{
    constructor()
    {
        this.rank = -8;
        this.progress = 0;
        this.ranks = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8]
    }

    incProgress(activityRank)
    {
        if(!this.ranks.includes(activityRank))
        {
            throw new Error("Invalid activity rank");
        }
        if(this.rank===8)
        {
            return
        }

        const userRankIndex = this.ranks.indexOf(this.rank);
        const activityRankIndex = this.ranks.indexOf(activityRank);
        let diff = activityRankIndex - userRankIndex;

        let earned = 0;
        if(diff === 0) {
            earned = 3;
        } else if(diff === -1) {
            earned = 1;
        } else if(diff < -1) {
            earned = 0;
        } else {
            earned = 10 * diff * diff;
        }

        this.progress += earned;
        
        while(this.progress >= 100 && this.rank < 8)
        {
            this.progress -= 100;
            this._increaseRank();;
        }
        if(this.rank===8)
        {
            this.progress = 0
        }
        
    }
    _increaseRank() {
    const currentIndex = this.ranks.indexOf(this.rank);
    if (currentIndex < this.ranks.length - 1) {
      this.rank = this.ranks[currentIndex + 1];
    }
  }
}


const user = new User();
console.log(user.rank);     
console.log(user.progress); 

user.incProgress(-7);
console.log(user.progress); 

user.incProgress(-5);
console.log(user.rank);    
console.log(user.progress); 