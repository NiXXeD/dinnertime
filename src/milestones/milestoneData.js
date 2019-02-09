const milestoneData = [
    {color: '#AF95C2', title: 'to hire 3 people in 1 turn', text: '+2 Management Trainees'},
    {color: '#BDB6B3', title: 'to train someone', text: '$15 discount on salaries'},
    {color: '#98C2C9', title: 'billboard placed', text: 'No salaries for marketeers; Eternal marketing.'},
    {color: '#AF95C2', title: 'to throw away drink/food', text: 'Get a freezer that stores 10 items (drink or food)'},
    {color: '#95A968', title: 'burger produced', text: '+1 Burger Cook'},
    {color: '#98C2C9', title: 'burger marketed', text: '+$5 for every burger sold'},
    {color: '#AF95C2', title: 'waitress played', text: 'Each waitress +$2'},
    {color: '#95A968', title: 'pizza produced', text: '+1 Pizza Cook'},
    {color: '#98C2C9', title: 'pizza marketed', text: '+$5 for every pizza sold'},
    {color: '#AF95C2', title: 'to have $20', text: 'May see bank reserve cards'},
    {color: '#A9CB94', title: 'Errand Boy played', text: 'All buyers get +1 drink from each source'},
    {color: '#98C2C9', title: 'drink marketed', text: '+$5 for every drink sold'},
    {color: '#AF95C2', title: 'to have $100', text: 'Your CEO counts as CFO (+50% to cash earned). May not have CFO.'},
    {color: '#A9CB94', title: 'Cart Operator played', text: 'Buyers get range +1'},
    {color: '#98C2C9', title: 'airplane campaign', text: 'Count +2 open slots when determining order of play'},
    {color: '#EAA791', title: 'to lower prices', text: 'Price -$1'},
    {color: '#BDB6B3', title: 'to pay $20 or more in salaries', text: 'May use multiple trainers on the same person'},
    {color: '#98C2C9', title: 'radio campaign', text: 'Your radios market 2 goods per turn instead of 1'}
]

export default milestoneData
export const localStorageKey = 'milestones'
export const defaultMilestones = milestoneData.map(() => 'available')
