import React, {Component} from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';

class PhoneDirectory extends Component {
    
    constructor(){
        super();
        this.state = {
            subscriberList: [
                {
                    id: 1,
                    name: 'Sagar Narvekar',
                    phone: '9673244598',
                },
                {
                    id: 2,
                    name: 'Deepa Narvekar',
                    phone: '963258741'
                }
            ]
        }
    }

    addSubscriberHandler = (newSubscriber) => {
        let subscriberList = this.state.subscriberList;
        if(subscriberList.length > 1){
        newSubscriber.id = subscriberList[subscriberList.length - 1].id + 1;
        } else {
        newSubscriber.id = 1;
        }
        subscriberList.push(newSubscriber);
        this.setState({subscriberList : subscriberList});
    }

    render() {
        return (
            <div>
               {/*<AddSubscriber addSubscriberHandler={this.addSubscriberHandler} />;*/}
                <ShowSubscribers subscriberList={this.state.subscriberList} />
            
            </div>
        )
    }
}

export default PhoneDirectory;