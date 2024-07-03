const Tweet = require('../models/tweet');

class TweetRepository{

    async create(data){
        try{
            const tweet = await Tweet.create(data);
            return tweet;
        } catch(error){
            console.log("ERROR:- ", error);
        }
    }

    async get(id){
        try{
            const tweet = await Tweet.findById(id);
            console.log(tweet);
            return tweet;
        } catch(error){
            console.log("Error:- ",error);
        }
    }

    async getWithComments(id){
        try{
            const tweet = await Tweet.findById(id).populate({path: 'comments' });
            console.log(tweet);
            return tweet;
        } catch(error){
            console.log("Error:- ",error);
        }
    }

    async update(id,data){
        try{
            const tweet = await Tweet.findByIdAndUpdate(id,data);
            console.log(tweet);
            return tweet;
        } catch(error){
            console.log(" Error:- ",error);
        }
    }

    async destroy(id,data){
        try{
            const tweet = Tweet.findByIdAndDelete(id,data);
            console.log(tweet);
        } catch(error){
            console.log(" Error:- ",error);
        }
    }
}

module.exports =TweetRepository;