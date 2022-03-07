const textElement = document.getElementById("text")
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}
let money = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex){
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while(optionButtonsElement.firstChild){
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option =>{
        if(showOption(option)){
            const button = document.createElement("button")
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option){
    return option.requiredMoney == null || option.requiredMoney(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id:1, 
        text: 'Please select how many family members you have',
        options:[
             {
            text: '3',
            setMoney: 15,
            nextText: 2
            },
            {
            text : '4',
            setMoney: 20,
            nextText: 2
            },
            {
            text:'5',
            setMoney: 25,
            nextText: 2
            },
            {
            text: '6',
            setMoney: 30,
            nextText: 2
            },
            {
            text: '7',
            setMoney: 35,
            nextText:2
            }

        ] 
    },
    {
        id: 2,
        text: 'Your first task is to decide on which insurances you wish to purchase for your family, you must select only one',
        options:[
            {
                text: 'Health insurance - inital cost of 11 euros & 1 euro per round',
                setState: {healthInsurance: true},
                nextText: 3
            },
            {
                text: 'Property insurance - inital cost of 22 euros & 1.50 euro per round',
                setState: {propertyInsurance: true},
                nextText: 3
            },
            {
                text: 'Theft insurance - inital cost of 18 euros & 2 euro per round',
                setState: {TheftInsurance: true},
                nextText: 3
            },
            {
                text: 'Bundle insurance - inital cost of 35 euros & 5 euro per round',
                setState: {bundleInsurance: true},
                nextText: 3
            },
            {
                text: 'No insurance',
                nextText: 3
            },
        ]
    },
    {
        id: 3,
        text: 'It is time to draw your decision card, use a random number generator and select the corresponding number',
        options:[
            {
                text: '1',
                nextText: 5
            },
            {
                text: '2',
                nextText: 9
            },
            {
                text: '3',
                nextText: 12
            },
            {
                text: '4',
                nextText: 15
            },
            {
                text: '5',
                nextText: 19
            },
            {
                text: '6',
                nextText: 22
            },
            {
                text: '7',
                nextText: 25
            },
            {
                text: '8',
                nextText: 30
            },
            {
                text: '9',
                nextText: 35
            },
            {
                text: '10',
                nextText: 39
            },
            {
                text: '11',
                nextText: 44
            },
            {
                text: '12',
                nextText: 47
            },
            {
                text: '13',
                nextText: 51
            },
            {
                text: '14',
                nextText: 55
            },
            {
                text: '15',
                nextText: 59
            },
            {
                text: '16',
                nextText: 62
            },
            {
                text: '17',
                nextText: 66
            },
            {
                text: '18',
                nextText: 71
            },
            {
                text: '19',
                nextText: 75
            },
            {
                text: '20',
                nextText: 81
            },
            {
                text: '21',
                nextText: 87
            },

        ]
    },
    {
        id: 4,
        text: 'It is now time to draw a work card, use a random number generator and select the corresponding number',
        options: [
            {
                text: '1',
                nextText: 91
            },
            {
                text: '2',
                nextText: 92
            },
            {
                text: '3',
                nextText: 93
            },
            {
                text: '4',
                nextText: 94
            },
            {
                text: '5',
                nextText: 95
            },
            {
                text: '6',
                nextText: 96
            },
            {
                text: '7',
                nextText: 97
            },           
            {
                text: '8',
                nextText: 98
            },
            {
                text: '9',
                nextText: 99
            },
            {
                text: '10',
                nextText: 100
            },
            {
                text: '11',
                nextText: 101
            },
            {
                text: '12',
                nextText: 102
            },
            {
                text: '13',
                nextText: 103
            },
            {
                text: '14',
                nextText: 104
            },
            {
                text: '15',
                nextText: 105
            },
        ]
    },
    {
        id: 5,
        text: 'You have been invited to a friends birthday. You dont have any plans for the evening, so you would have time to make it. What would you choose?',
        options: [
            {
                text: 'Go to the birthday with a gift',
                nextText: 6
            },
            {
                text: 'Go to the birthday without a gift',
                nextText: 7
            },
            {
                text: 'Dont go to the birthday',
                nextText: 8
            }
        ]
    },
    {
        id: 6,
        text: 'You purchase a small canvas, costing you 2 euros, and you paint a little scene of your friend’s front garden. When you arrive, your friend is excited to see you. She thanks you for the gift, and turns to the other attendees and talks about how great of a nature artist you are. The other people at the party are impressed, and begin asking if you take commissions. You leave the party with three orders for paintings of people’s gardens. As well as an extra 10 euros, you were also invited over for coffee a few times by those who ordered paintings. You feel proud of your accomplishments and safer from the new friend connections.',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 7,
        text: 'When you arrive at the party, there is a big table which everyone is placing gifts on. No one says anything, but you feel self-conscious when you walk in and do not place one there too. You feel guilty taking any of the snacks or having a drink; you think people might think you don’t deserve to have anything because you didn’t bring a gift too. You speak with your friend a bit, but you feel so uncomfortable about being the  odd one out that you spend most of the evening in the corner not really talking. After the evening, you are glad you went to support your friend, but the feelings of shame and being a disappointment to your friend linger for quite some time. ',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 8,
        text: 'You send a text to your friend telling her that one of your kids is sick and you cannot attend. Of course, this is a lie. You see her typing back and you wonder if she can see through the weak attempt to hide why you really can’t go. She responds, “No problem, hope they feel better!” The kids are actually gone for the weekend at a family friend’s house, so you  are home alone. You spend the evening feeling very lonely. You later see  photos and videos of people that are attending your friends birthday party, and  your heart sinks. Not being able to attend makes you feel lonely and sad.',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 9,
        text: 'Your elderly neighbor has come by and asks if you have time to come over and help him fix a leak in his home. You look at the time - you have about twenty more minutes before you need to leave for work.',
        options:[
            {
                text: 'Help the neighbour',
                nextText: 10
            },
            {
                text: 'Dont help the neighbour',
                nextText: 11
            },
        ]
    },
    {
        id: 10,
        text: 'The leak isn’t that serious and you fix it together in 15 minutes. However, the neighbor talks. A lot. He’s very kind and grateful, thanking you a lot, but he subsequently makes you even more late for work. He also asks if you can pick up materials to fix the leak from the store, and then doesn’t pay you back. You lose 50% of your next paycheck, as well as two euros for the supplies. ',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 11,
        text: 'Although you do not help him, you recommend a service company that could help him with the leak. Unknown to you, your neighbor is struggling with his bills too and he is afraid that calling a company will cost too much money. His opinions have changed a bit about you.',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 12,
        text: 'Bills are piling up in your home and you need to save some money. There is no way you can keverything that you have been paying for',
        options:[
            {
                text: 'Cancel your insurances, you earn 4 euros',
                nextText: 13
            },
            {
                text: 'Cancel electricity & water',
                nextText: 14
            }
        ]
    },
    {
        id: 13,
        text: 'You’re extremely anxious as you decide to cancel your family’s insurances. Of course you are grateful to earn back 4 euros, but now you have so many new things to worry about. What if a family member gets sick? What if someone breaks into your house and steals things? The stress is really getting to you and you start to occasionally have panic attacks when you hear a strange sound in the house or when you’re  getting home from work -  you’re afraid you’ll open the door and see that someone has robbed you.',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 14,
        text: 'Although you don’t want to, you choose to cancel your water/electricity and earn back 6 euros. You know this is going to be difficult for your family, especially for your children. You feel guilty about putting them through this. You begin to smell bad because you can’t take showers anymore without water. The kids are also dirty and are sent home with letters from the school about them not being properly clean. You are worried someone will send child protection services and take your kids away from you.',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 15,
        text: 'You find a purse with money inside (10 EUROS) on the ground. There is also a photo ID, bank cards, a family photo, and an OV Chipcard inside as well.',
        options:[
            {
                text: 'You return the purse without taking anything from it to the police',
                nextText: 16
            },
            {
                text: 'You take the money and return the purse to the police',
                nextText: 17
            },
            {
                text: 'Keep the purse for yourself',
                nextText: 18
            }
        ]
    },
    {
        id: 16,
        text: 'The police thank you for bringing it back, but don’t say much else. Sadly, you also do not hear back from the owner and you do not receive any reward, except that you know you did the right thing. Perhaps the person who had lost the wallet had also been struggling financially. You feel good that you handed it in.',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 17,
        text: 'The owner is quickly found and he reaches out to you to thank you: the photos in the wallet were of his parents who had passed away, and he is very grateful to have them returned. He insists on giving you 5 euros as a reward for  “doing the right thing.” You take the money, but you feel terrible. He doesn’t know you had taken his money, and now he’s giving you even more money. ',
        options:[
            {
                text: 'Take the money',
                nextText: 4
            },
            {
                text: 'Donate the 5 euros to charity as you feel guilty taking it',
                nextText: 4
            }
        ]
    },
    {
        id: 18,
        text: 'You don’t feel great about this decision, but you know that your family can use the money, and what are  the chances that another family needs the ten euros as much as you do?  Unfortunately, poverty is more common than you realize. 70,000 households in Amsterdam live below the poverty line. The money you had found  belonged to another family going through poverty, and the ten euros was  half of their monthly food budget. They struggle to feed themselves and their children for the next few weeks. ',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 19,
        text: 'You see a deal with a company looking for grocery delivery drivers. You need to have your own car, but they help finance the purchase of a car for new employees.',
        options:[
            {
                text: 'Buy the car, which costs 30 euros but will allow you to gain 50% extra on all future work tasks',
                nextText: 20
            },
            {
                text: 'Dont take the job',
                nextText: 21
            },
        ]
    },
    {
        id: 20,
        text: 'Your car gives you a new sense of freedom you didn’t expect. You are able to help family members get around faster, tasks like purchasing groceries have gotten less stressful because you don’t need to carry them yourself, and you are able to get things done faster. You do, however, feel new stresses: gas is expensive, and if the car breaks down or you get in an accident, you may not be able to afford fixing it. You do your best to manage these anxieties and enjoy having this item. Now you earn 50% more on work tasks',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 21,
        text: 'You feel you have made the most sensible decision. The future is uncertain, and there is no guarantee that you would have been able to benefit enough from having a car to recover the investment. You think about this fact: it is so exhausting to have to calculate the odds of every outcome every time you have to decide something, but maybe one day things may change, that is what you say to yourself every time a hard decision has to be made.',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 22,
        text: 'You get a call from your child’s school. They’re sick and need to be picked up. ',
        options:[
            {
                text: 'Leave work early and take care of your child',
                nextText: 23
            },
            {
                text: 'Call a babysitter to take care of your child',
                nextText: 24
            },
        ]
    },
    {
        id: 23,
        text: 'The children feel much safer and cared for because they are able to cuddle with you rather than a stranger. You can sense that they are happy to have you home early and also to be close to you. Although you are happy to have been able to be there for your children, you are now more likely to catch the flu that they have. Roll a die: if you roll 1 or 2, you catch the flu as well and have to skip the next work task.',
        options:[
            {
                text: 'Rolled a 1 or 2',
                nextText: 4
            },
            {
                text: 'Rolled >2',
                nextText: 4
            }
        ]
    },
    {
        id: 24,
        text: 'As this was a last-minute situation you had to hire someone that neither your children nor you knew. The babysitter is kind and caring, but when you get home your kids are clearly anxious from being around someone they don’t know while also not feeling well. They are crying when you walk in and you have to spend some time comforting them. You feel guilty for not being able to be there for them. You lose 2 euros paying the babysitter. ',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 25,
        text: 'You see an interesting evening course for adults. The ad claims that taking this course will earn you a certificate showing you are a skilled worker for future employers. ',
        options:[
            {
                text: 'Register for the course, costs 20 euros',
                nextText: 26
            },
            {
                text: 'Do not register for the course',
                nextText: 29
            },
        ]
    },
    {
        id: 26,
        text: 'At first, you feel very motivated and are  excited to learn something new. However, studying and working at the same time is very difficult. You begin to fall behind in your studies. You know you may still be able to pass the final exam, though, if you are able to manage your time better. Roll a die: if you score between 1 and 3, you pass the course.',
        options:[
            {
                text: 'Passed',
                nextText: 27
            },
            {
                text: 'Failed',
                nextText: 28
            }
        ]
    },
    {
        id: 27,
        text: 'Congratulations! You now earn 50% more on all work tasks for being a more skilled worker :) ',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 28,
        text: 'You know that you tried your best, but you are disappointed in yourself for not being able to get it together. You don’t have enough money to repeat the course and take the exam again. You’re embarrassed to have effectively wasted money that your family could have used for something else. ',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 29,
        text: 'Even if you had enrolled in the course, you don’t think you could have guaranteed that you would’ve been able to have the time to complete all the course requirements. Studying, working, and taking care of your family all at the same time could have been too much for you. However, you feel sad. You think about all the possibilities for self-development you have missed because of decisions like these. You feel like you have let yourself down by not being able to live to your full potential. You also think about how this course could have improved your chances of getting better jobs. You try to stop daydreaming -  there’s no point in thinking about what-ifs, you have to accept reality and keep going. ',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 30,
        text: 'You are walking towards the grocery store when you see a man begging for money. He asks if you can spare any money for him.',
        options:[
            {
                text: 'Give him all your money',
                nextText: 31
            },
            {
                text: 'Give him 25% money',
                nextText: 32
            },
            {
                text: 'Apologise and explain your situation',
                nextText: 33
            },
            {
                text: 'Ignore him',
                nextText: 34
            }
        ]
    },
    {
        id: 31,
        text: 'The man is very happy and grateful. He starts to cry, saying that he has been doing the best to try and get out of poverty, but it feels nearly impossible. He says that you can’t possibly understand how much this amount of money means to him. You start to cry a little too, and say, actually, you do - you also are having financial troubles, but that doesn’t mean you can’t help another person. He is shocked by your generosity, and insists that he can’t possibly take this much money from you. Eventually you accept back 75% of what you had initially given. He promises that good things will come your way if you continue to have such a good heart. You feel like you have done a good thing, but wonder now how you will survive missing so much (25%) of your money. ',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 32,
        text: 'he man is really happy and grateful. He goes into the store and you follow to do your own shopping. You see him in the baby food aisle, picking up several jars. You feel very good for giving money to the man and hope that others will pay it forward to you in the way that you just did. ',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 33,
        text: 'He is surprised that you have stopped to talk. He tells you that you are the first person who has spoken with him like an equal in months: others just gave him a few coins or entirely ignored him. The people who have talked to him have not treated him like a human being. You learn a bit about his backstory and how he has been struggling to get out of poverty for so long. He tells you that you have given him some hope that one day things will go back to normal. You tell him about your financial problems too, and he empathizes. He promises that good things will come your way if you continue to have such a good heart as to treat others with kindness. You see him several more times after this first encounter, and you continue to talk with him about your life and his. ',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 34,
        text: 'Like most of the people walking by. While in the store you feel a bit guilty for adding to the normality of ignoring another human being in this way. How often are you going along with a social norm that is actually dehumanizing someone else? As you’re leaving the store you want to walk up and correct your first decision, but the man is no longer there. ',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 35,
        text: 'It is the 10th day that you have worked in a row. You feel exhausted, frustrated, and would give anything for a day off. ',
        options:[
            {
                text: 'Call in sick the next day and spend it with your family at the park',
                nextText: 36
            },
            {
                text: 'Call in sick the next day and spend it in bed',
                nextText: 37
            },
            {
                text: 'Do not call in sick and go to work',
                nextText: 38
            },
        ]
    },
    {
        id: 36,
        text: 'This time there were no fights between the children and you were able to spend time playing with them. You did feel a bit uncomfortable, though: you are extremely tired still and find yourself having to spend a lot of time just sitting on the benches rather than actively playing with your kids. You also keep glancing over your shoulder, worried that someone will see you skipping a day off work and that they will report you to your boss. Eventually, you tell the kids that you all need to leave now because you really need some extra time to rest. The kids are sad but they are understanding too: because you spent time with them, it  makes it easier for them to listen to you and also empathize with how you feel  as a working parent. You go home and spend the rest of the day sleeping and relaxing in bed. By the next day, you feel much better.',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 37,
        text: 'You slept well and feel much better the next day. However, the children are sad. They don’t understand why you didn’t want to spend any time with them and they struggle to relate to why you are so tired all the  time. They miss you a lot. They also have to play quietly in the house, and are afraid you will be angry if they wake you up. They feel distant from you. ',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 38,
        text: 'his is too much for your body to handle. Your immune system is suffering. Remember that most of your work requires physical and outdoors activities, so you really need to pay attention to how you feel. Roll a die: if you land on an even number, you will get sick and will have to miss the next work task. ',
        options:[
            {
                text: 'Got sick',
                nextText: 4
            },
            {
                text: 'Did not get sick',
                nextText: 4
            }
        ]
    },
    {
        id: 39,
        text: 'The kids have been asking to spend more time together, and you finally have a day where no one has any commitments.',
        options:[
            {
                text: 'Take the family to the cinema, 2 euros per adult & 1 euro per child',
                nextText: 40
            },
            {
                text: 'Take the family to the park',
                nextText: 41
            },
            {
                text: 'Stay at home with the family',
                nextText: 42
            },
            {
                text: 'Pick up an extra shift, earn 5 euros',
                nextText: 43
            }
        ]
    },
    {
        id: 40,
        text: 'The children are really happy, they love to spend time with you and going to a cinema feels extra exciting. They have a great time and you spend the day laughing and connecting. When you get home, the kids are in such a good mood that they decide they want to take some of the burden off of you as a thank you and they pick up some extra chores so you can relax for the rest of the evening. Your whole family feels happy together and the kids feel closer to you. In the next decision task that the kids have, they will listen to the parents advice. ',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 41,
        text: 'You have a fun day at the park, but you are too tired to be so active. The kids run around and play together, and you join in some of the time. When you get home, the kids are happy to have been able to spend some time with you. They feel a little bit closer to you than earlier that day. Roll a die: if it lands on an even number, the kids will listen to parents advice the next time they complete a decision task. ',
        options:[
            {
                text: 'The kids will isten to the parents advice',
                nextText: 4
            },
            {
                text: 'The kids will not listen to the parents advice',
                nextText: 4
            }
        ]
    },
    {
        id: 42,
        text: 'You say you’re happy to spend time with them, but would like to stay at home and rest together. The kids have more energy than you and they spend most of their time either at school or in the house, so they feel very antsy still being stuck there. They start running around and being too active inside. You send them outside to play, but at this point you are irritated and don’t want to interact anymore - you just want some peace and quiet so you can also enjoy your day off. The kids do not  feel close to you, despite having spent the day at home together. The next time there is a child decision task, the children actively do not listen to parents advice.',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 43,
        text: 'Your kids are disappointed, though, that you ignored their request to spend time together. The kids do not feel close to you and this results in a lot of arguing amongst the whole family. The next time there is a child decision task, the children actively do not listen to your parents’ advice. ',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 44,
        text: 'A close family friend has passed away unexpectedly. The funeral has been planned for the end of the week. You are currently scheduled to work. ',
        options:[
            {
                text: 'Attend the funeral',
                nextText: 45
            },
            {
                text: 'Do not attend the funeral',
                nextText: 46
            }
        ]
    },
    {
        id: 45,
        text: 'Missing a day of work means losing 3 euros, but your relatives are glad to see you. You are also grateful to have a day to mourn the passing of your ‘Aunt’. You were quite close to her growing up, because she had helped raise you while your parents were busy working. You spend the day supporting your Aunt’s husband and kids. The family feels closer together from the experience and you feel like they would be more willing to help you if you needed something in the future. ',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 46,
        text: 'You earn 3 euros from choosing to go to work. However, you also receive an angry phone call from one of your relatives demanding to know why you didn’t go. “Your ‘Aunt’ had always been there for you,” your relative says. “How could you be so disrespectful to not come to her funeral?” You are shocked to be confronted like this and you immediately hang up on the relative. From now on you will always feel uncomfortable around relatives because of this conversation, and you sense that none of them will be willing to help if you ever needed assistance. ',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 47,
        text: 'Your childs birthday is coming up (Oldest child). They havent asked for anything yet',
        options:[
            {
                text: 'Purchase a gift and a cake',
                nextText: 48
            },
            {
                text: 'Bake them a cake',
                nextText: 49
            },
            {
                text: 'Do not plan anything',
                nextText: 50
            }
        ]
    },
    {
        id: 48,
        text: 'You spend 3 euros getting a small  gift and ingredients. Your child comes home from school and is excited to see what you had done. As they’re eating the cake, however, they start to take smaller and smaller bites. You ask what’s wrong. Your child admits that they feel guilty eating the cake and taking the gift because they know you could have probably put the money towards something else more important for the whole family. You try to explain to your child that celebrating birthdays is important for the family, but your kid still struggles to feel as excited about what they’ve received. You feel sad that they can’t fully enjoy their birthday gifts without the guilt. ',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 49,
        text: 'You go to the grocery store and purchase 2 euros worth of ingredients. It’s been tough to save enough money for this, but you feel grateful to be able to get a few cheap things to make a simple cake. When you get home, you get off your bike and head into the house.  Unfortunately you trip and drop the groceries! The eggs crack and go everywhere. You feel like crying after scrimping and saving to buy just a few things, it’s ruined in a moment. Just then your kid gets home from school and sees the mess. Rather than being sad, your child is excited to see the necessary ingredients to make homemade slime. You spend the evening together making gooey slime and laughing together. You feel  relieved that they are not upset to not have a cake. You also feel your perspective has changed: your children value time with you far more than what items they receive. ',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 50,
        text: 'You feel guilty, but it’s more important that there is food on the table than getting anything extra for a birthday. You wish them a happy birthday and give them lots of hugs. They smile and say thank you. The rest of the day goes on as normal. At dinner you try to make up for not having a gift by asking lots of questions about their day, but the conversation feels a bit forced. Your child can sense you are feeling guilty. They keep saying it’s fine that you didn’t get them a gift. To prove that everything is fine, they help with the dishes and even do a few extra chores. Later that evening, you hear the sounds of crying coming from your child’s room. You open the door and your child immediately tries to stop sniffling. They force a smile and say goodnight and they love you. ',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 51,
        text: 'Your child needs books for school.',
        options:[
            {
                text: 'Purchase the books, costs 4 euros',
                nextText: 52
            },
            {
                text: 'Borrow the books from the library, the library membership costs 1 euro',
                nextText: 53
            },
            {
                text: 'Do not plan anything',
                nextText: 54
            }
        ]
    },
    {
        id: 52,
        text: 'The purchase does pay off - your child’s grades are going up and you’re happy to see them succeeding. You do worry, though, about having enough food to be able to feed everyone after such a big purchase... ',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 53,
        text: 'Your child doesn’t mind borrowing the books from the library, but unfortunately they have to return them after two weeks. Your child starts to get in trouble at school; the teacher keeps demanding to know where their books are. They also start getting bullied for always being in trouble with the teacher. They come home from school crying often. ',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 54,
        text: 'Your child is scared to go to school unprepared. You tell them they have to go to school, so they do. When it is time to use the book in class, your child tries to pretend they have a book so no one will notice they don’t actually have one. The teacher, however, has everyone go around the room to read out different sections. When it gets to your child’s turn, the teacher realizes they don’t actually have a book. A friend tries to pass their copy to your child, but the teacher scolds both students: your child should be prepared for class, always. After a few more times of not bringing in a book, the teacher gives your child detention. Your child’s grades also begin to suffer. ',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 55,
        text: 'A coworker is walking around the office collecting money to buy your boss a birthday gift. They ask if you would like to give towards the gift.',
        options:[
            {
                text: 'Give them some money, 3 euros',
                nextText: 56
            },
            {
                text: 'Say youll think about it, but you know you wont give anything',
                nextText: 57
            },
            {
                text: 'Say you cant give anything as you dont have money to spare',
                nextText: 58
            }
        ]
    },
    {
        id: 56,
        text: 'The coworker thanks you and hands you a birthday card for you to sign your name on. You unfortunately had to give the money that was meant to go towards your lunch that day. The stress and lack of energy from not eating takes its toll on you. After the birthday has passed, you find out your  money went towards some silly junk gift that your boss ends up never using and tossing in the trash later. You are angry and frustrated that you wasted your money on something that didn’t even matter and no one appreciated. Do they not understand the value of money? ',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 57,
        text: 'You start avoiding this coworker, because you don’t want them to bring it up again. After the birthday, the boss thanks everyone in a company wide email and lists the names of those who put money towards the gift. You feel embarrassed that you’re the only full-time worker who’s name is not there. ',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 58,
        text: 'Your coworker seems taken aback by your honesty. They say they understand, and offer to let you sign the birthday card anyways. Other co-workers overhear the conversation, and you feel like they are secretly talking about and staring at you. You try to ignore it, but the atmosphere of the room has shifted. Your boss later sends around a company wide email, thanking the people who gave him the gift. He names everyone who gave the gift, and your name is there too since you signed the birthday card. You feel guilty for getting credit for something you didn’t actually do and it reminds you of how your coworkers were judging your honesty.',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 59,
        text: 'You have met a new coworker and have been getting along very well with them.They ask you if youd like to grab food and a coffee during your lunch breaks.',
        options:[
            {
                text: 'Say sure youd love to go to the cafe with them',
                nextText: 60
            },
            {
                text: 'Say not this time as youve already brought lunch',
                nextText: 61
            },
        ]
    },
    {
        id: 60,
        text: 'As you’re standing in line, you check the menu for the cheapest options. You still end up spending 1.50 euros. You sit down together and your coworker asks if you arent very hungry, since you didn’t buy that much. You say you had a big breakfast and ate some snacks during the morning so you are still quite full to have lunch. Your coworker believes you, and you have a nice time chatting together. Your co-worker has a nice time too and says you should do it more often. You immediately start to worry - you can’t afford to keep going out for lunch, but you had a nice time. The next few times they ask to have lunch you make up excuses to get out of having to spend more money.',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 61,
        text: 'our coworker goes to get food and ends up coming back with a  sandwich, a snack, and two drinks. She offers a drink to you and says you can take  a break with her in the break room. You share the snack with her and have a nice time chatting together. You feel very grateful that someone would be so kind as to bring back a drink and snack for you out of nowhere. You feel hopeful that maybe you will eventually be able to be honest with this coworker about your situation. ',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 62,
        text: 'On their way home from school, the kids find a stray cat. She follows them all the way back to the house and is purring loudly around them. She looks skinny - this decision is for the kids to make',
        options:[
            {
                text: 'Beg parents to keep the cat',
                nextText: 63
            },
            {
                text: 'Ask parents nicely if you can keep the cat',
                nextText: 64
            },
            {
                text: 'Bring the cat home, hide it in your closet and feed it scraps',
                nextText: 65
            }
        ]
    },
    {
        id: 63,
        text: 'As soon as they come back from work, they look exhausted, but you’re determined. You tell them all about the skinny, dirty cat you found and plead with them to let you keep her. Your parents tell you they understand you want to help the cat, but that they can’t afford one right now. You don’t give in, you begin to beg even more, raising your voice and demanding that they keep it - how can you be so heartless to not keep this poor cat? Your parents get angry at you being disrespectful, and stick to their first answer of no. The whole household feels on edge from the arguments.  ',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 64,
        text: 'Everybody in the family is going around in a circle, talking about their day When it is your turn to talk, you tell your story. You mention the cat you came across and how it followed you. You empathize that you tried everything to chase it away, but it seemed to be lonely. Your parents say that’s quite sad. You suggest that it might have lost its family. You then ask your parents nicely if you can keep the stray cat, and you promise to take care of it yourself. Your parents hesitate. You wait patiently for a response. They eventually say they are willing to see if they can keep it. Your family adds an additional 1 euro to their bills to help support the cat. ',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 65,
        text: 'You know that your parents will probably not let you keep the cat if you ask. So, not wanting to stress them out more, you decide to secretly keep it. After  collecting a box for it to sleep in and a spare blanket, you make a bed for the cat in your closet. You give the cat scraps of food from leftover meals. Unfortunately, the cat doesn’t seem to like the things you are trying to feed it. Your parents end up hearing it meowing loudly one night. They are very unhappy that you kept the cat a secret. They spend 1 euro on proper cat food to feed it while they look for a proper home for it. You’re sad when you have to say goodbye to the cat, but you feel good that you were able to help it find a home. ',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 66,
        text: 'Recently you have been getting bullied at school because your clothes are dirty and have holes in them. One time during lunch, one of the other kids walks up to you and throws an open yogurt container at you - What do the children choose to do?',
        options:[
            {
                text: 'Push the bully',
                nextText: 67
            },
            {
                text: 'yell at the bully',
                nextText: 68
            },
            {
                text: 'Get a teacher',
                nextText: 69
            },
            {
                text: 'Ignore the bully',
                nextText: 70
            }
        ]
    },
    {
        id: 67,
        text: 'The bully falls over and hits his head on one of the lunch tables. He starts crying, causing teachers to run over. The teachers ask you why you did this and you try to explain, but you start to get emotional too. You feel so frustrated by everything. After school, you go home and your teachers have already contacted your parents. You have to have a parent-teacher conference. You can sense your parents are also frustrated, because now they have to miss work hours to go to the meeting. You can barely talk during the conference, because you just feel like you’re going to start crying again. Your family loses 4 euros from missing work to attend the meeting with your teachers.',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 68,
        text: 'You decide to yell at the bully. You tell him to leave you alone. The bully laughs and picks up the yogurt container and throws it at you again. You pick it up and throw it back, just as a teacher walks past. She immediately tells you off, and you begin to feel very emotional. You feel so frustrated by everything. How could they not have noticed the yogurt all over your clothes and believed you were the one being picked on? After school, you go home and your teachers have already contacted your parents. You have to have a parent-teacher conference. You can sense your parents are also frustrated, because now they have to miss work hours to go to the meeting. You can barely talk during the conference, because you  just feel like you’re going to start crying again. Your family loses 4 euros from missing work to attend the meeting with your teachers. ',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 69,
        text: 'You immediately turn around and walk across the lunchroom to a teacher. The bully calls after you, saying you’re a tattle tale and sneering. You tell the first teacher you see that someone threw yogurt at you. You explain that kids are always picking on you because of the clothes you wear, how they’re not new or clean. The teacher sends you to the bathroom, and tells you to wash the yogurt off of your sweater as best you can. That day, the teacher sends you home with a letter for your parents. You give it to them when you get home. They read it out loud: it says that you have been getting bullied because of the poor quality of your clothes. The teacher tells your parents to buy new clothes and to also make sure they are getting washed properly so that the bullying will stop. You and your parents both feel extremely embarrassed. It’s decided that they will spend 2 euros on some  new outfits from a thrift store, but you still walk down the halls feeling ashamed. The bullying also doesn’t stop.   ',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 70,
        text: 'You close your eyes, breath in slowly, and do your best to not react as the yogurt drips all over your sweater. The bully continues to cackle about his act, but walks away to hang out with his friends. You head for the bathroom and try to clean up your sweater. As you’re running water over the stains, another student walks into the bathroom. “That wasn’t ok,” they say, as they take off their sweater. “Here, you can wear mine.” You feel both very relieved and very uncomfortable. Your face feels warm as you try not to cry. “Don’t worry about  it,” they say smiling. “Really, you can even keep it.” ',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 71,
        text: 'A new kid has joined the class, and you spend some time talking to them. By the end of the day, they take out their iPhone and ask for your cellphone number. You don’t have a cellphone. - what do the kids choose to do' ,
        options:[
            {
                text: 'Tell the truth: you dont have a phone and you cant give your parents number out',
                nextText: 72
            },
            {
                text: 'Lie: say your phone is broken',
                nextText: 73
            },
            {
                text: 'Lie: say your parents dont let you have a phone',
                nextText: 74
            },
        ]
    },
    {
        id: 72,
        text: 'You tell the new friend that you don’t own a cell phone. The new kid looks surprised. “You don’t own a phone? How do you, like, talk to people?” they ask. “I just see them in school,” you explain. The new kid still looks confused. “Yeah, but what about after school?” the kid asks. “Well, I usually just spend time in person,” you answer awkwardly. After a bit, they nod and say “I guess that makes sense, want to come over then?” You smile and head over to their house.  ',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 73,
        text: 'The new kid says that’s not a problem – they can find you on Facebook, so no worries! You can use Messenger to talk to each other! You start to get uncomfortable. Unfortunately, you can’t always reply quickly, because you have to share the desktop computer at home with the rest of your family. You try to keep a straight face, say sure, and you look yourself up using their cell phone. You head home and try to get onto the home computer, but your parents are using it and say that you have to wait. You get anxious waiting to get onto the computer, but by the evening you still aren’t allowed on. The next day, the new kid comes up to you and asks why you didn’t respond to their friend request. You say you were too busy, you’ll do it later. The kid looks sad. They think that you aren’t that interested in being friends and walks away. ',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 74,
        text: 'They look at you strangely and ask you why not. You stumble over your words and quickly walk away embarrassed. The next day at school, you see  other students staring at you and you don’t know what’s going on. Why are they talking behind your back, why are even your friends looking at you in a funny way? It turns out that the new kid has been walking around telling people about how your parents are really weird and don’t believe in having any technology in the house. Now everyone thinks your whole family is strange. Great - instead of people knowing that you’re poor, they now think you’re just a weirdo. You decide to tell your group of friends that it’s not true  and that the new kid is a liar. They believe you and you try not to care about the rest of your class. Hopefully the rumor will die down quickly.  ',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 75,
        text: 'All your friends have decided they’re going to play “Secret Santa,” but you already know that you can’t buy a gift to participate. - What do the children choose to do?',
        options:[
            {
                text: 'Tell your friends your parents wont let you',
                nextText: 76
            },
            {
                text: 'Say youll join, and make a small gift for your person',
                nextText: 77
            },
            {
                text: 'Say youll join and give one of your possesions to your person',
                nextText: 78
            },
        ]
    },
    {
        id: 76,
        text: 'Your friends are disappointed, but they’re ok with it. The following week, one of your friends asks if you can help them pick out a gift, because you know the person they’ve got a lot better. You’re really pleased, this way you are still somewhat involved in the Secret Santa! During the gift exchange, your friend mentions that you helped pick it out. You smile as the other friend thanks you. But, you also feel a little off: everyone else is chatting, laughing, and smiling together about the gifts they’ve given and received. You feel left out and sad, even though no one is excluding you on purpose. ',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 77,
        text: 'You start to feel anxious about what you’ll give. The friend you’re assigned to isn’t someone you’re close with, and this makes you more nervous. You decide to ask you parents for help deciding what you should do, with the parents advice what do you decide on doing? ',
        options:[
            {
                text: 'Purchase some chocolates for 2 euros',
                nextText: 78
            },
            {
                text: 'Purchase a set of scarf and mittens for 3 euros',
                nextText: 79
            },
            {
                text: 'Make something from the studd you have at home costs nothing',
                nextText: 80
            }

        ]
    },
    {
        id: 78,
        text: 'The weather is terrible but you’re able to get to the party without the gift getting too wet. Once you get to the party, you place your gift in the pile with the rest. It feels good to participate! When it’s time to unwrap the gifts, you watch nervously as everyone goes around the room and picks up their gift to unwrap. When your person unwraps the gift you got, they look a little disappointed. Everyone else had gotten a few different things in their gifts. They say thanks awkwardly. You feel your face going red.  ',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 79,
        text: 'The weather is terrible but you’re able to get to the party without the gift getting too wet. Once you get to the party, you place your gift in the pile with the rest. It feels good to participate! When it’s time to unwrap the gifts, you watch nervously as everyone goes around the room  and picks up their gift to unwrap. When your person unwraps the gift you got, they look pleased. “I just lost one of my mittens, so this is actually pretty useful!” You smile and tell them it was you who gave them. They give you a hug and say thank you. You feel happy and relieved to have gotten to participate, but also to have gotten something they liked. ',
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 80,
        text: 'You end up painting a picture of the friend’s pet dog. The weather is terrible as you’re traveling to the party. The wind and rain blows  at you so hard that – despite putting the gift in plastic bags to protect it – the watercolor paint runs everywhere. Once you get to the party, you place your gift in the pile with the rest. Everyone else’s gifts look nicely wrapped, but yours is just... wet, without ribbons or nice wrapping paper. When it’s time to unwrap the gifts, you watch nervously as everyone goes around the room and picks up their gift to unwrap. When your person gets their gift, you feel so terrible that your stomach hurts. “What..is it?” The friend asks. “It’s supposed to be your dog,” you mumble. The friend squints at the splotches of color and says thank you awkwardly. Your face feels hot with embarrassment.' ,
        options:[
            {
                text: 'Next',
                nextText: 4
            }
        ]
    },
    {
        id: 81,
        text: 'Your birthday is coming up (Youngest child). You mention this in school to one of  your classmates. “Are you having a birthday party?” She asks. You say no. “If you’re not having a party it means you’re not having a birthday.” She tells you sneering.' ,
        options:[
            {
                text: 'Tell them its still your birthday without a party',
                nextText: 82
            },
            {
                text: 'Tell them what you meant was that youre having a party but they are not invited',
                nextText: 85
            },
            {
                text: 'Ignore her',
                nextText: 86
            }
        ]
    },
    {
        id: 82,
        text: '“That’s not true!” you say, frowning. “You don’t need to have a party in order for it to be your birthday.” She laughs at you. “Oh yes you do, you have to have a party. And you have to bring treats in for the class. That’s what makes it a birthday!” You glare at her even more and you feel your temper and frustration rising. After school you go home and talk to your parents. “A girl at school says it’s not my birthday without a party, and now I feel like I have to have one. Can I please have one?”  ASK PARENTS: Yes (5 euros for supplies) or no? - Now the parents decide on an answer to the question',
        options:[
            {
                text: 'Yes',
                nextText: 83
            },
            {
                text: 'No',
                nextText: 84
            }
        ]
    },
    {
        id: 83,
        text: 'Your parents say you can have a party! You invite a few close friends (not the girl who was nagging about the party) to the park where you have a picnic party. Your parents let you pick out some food and you’re really excited to have everyone come. As people arrive and sit down, you share the snacks and talk. Soon, though, the snacks are gone, and everyone seems bored. One of your friends asks why there isn’t anything fun to do. You nervously look to your parents, and they suggest you go play on the playground and they’ll stay with the picnic blanket. You’re relieved. You and your friends play together for what feels like hours! You had the best birthday ever, and you’re so grateful that your parents allowed you this.' ,
        options:[
            {
                text: 'Next',
                nextText: 4
            },
        ]
    },
    {
        id: 84,
        text: 'You try to understand, but the next day at school, the girl keeps bullying you about not having a birthday. Soon, the whole class is referring to you as the kid so annoying they don’t even deserve a birthday. You feel awful and your grades start to go down. ' ,
        options:[
            {
                text: 'Next',
                nextText: 4
            },
        ]
    },
    {
        id: 85,
        text: 'She looks surprised and stomps away. You may not have known this, but she’s often not invited to birthday parties and you made her really sad by saying this. Of course she had not been very kind, but maybe if others had been kinder to her she wouldn’t have resorted to bullying herself. You don’t know the exact situation your classmates are in: some of them may be struggling financially too, but some are struggling socially as well. You could have just been kind and avoided causing her all this pain. You tell your parents what happened and what you should’ve done instead.' ,
        options:[
            {
                text: 'Next',
                nextText: 4
            },
        ]
    },
    {
        id: 86,
        text: 'You ignore her, but some of your own friends also know that your birthday is coming up. They too are asking if there’s going to be a birthday party. You keep answering them ‘ maybe’ until your birthday comes and there’s no party. Your friends are disappointed of course, but they decide to bring some presents for you to school. The girl is still sneering from across the room, but you still ignore her.' ,
        options:[
            {
                text: 'Next',
                nextText: 4
            },
        ]
    },
    {
        id: 87,
        text: 'It’s almost summer vacation and all your classmates are discussing what they’re going to do for vacation. You already know that you aren’t going anywhere, nor have you actually ever been on vacation. - What do the kids choose to do? ' ,
        options:[
            {
                text: 'Tell them youre not going on vacation',
                nextText: 88
            },
            {
                text: 'Lie: Tell them its a surprise so you dont know where youre going',
                nextText: 89
            },
            {
                text: 'Lie: Tell them youre going on a beach vacation in Mexico',
                nextText: 90
            }
        ]
    },
    {
        id: 88,
        text: 'They’re  surprised, not going on vacation? How is that possible? You then explain that you and your family usually stay at home and that you may visit one city or go to the beach once during the summer. You tell about that time you went to one of the Wadden islands, which was super cool! Your friends haven’t even been there, although some of them have visited islands like Las Palmas, Bali, or Santorini. You’ve done amazing things like seeing seals and mudflat hiking, which sounds super cool to your friends! They understand that there are also cool things to do when you remain in the Netherlands. You’re happy that you aren’t ridiculed for not going on holiday. ' ,
        options:[
            {
                text: 'Next',
                nextText: 4
            },
        ]
    },
    {
        id: 89,
        text: 'They’re super interested in this surprise trip. Once the holiday break is over, your friends come back to school and ask where you ended up going. You had totally forgotten about this lie. You start trying to make up the amazing trip to Disney World you took, but someone else actually did go to Disney World – and they keep asking you what you thought of the different rides and shows. You feel more and more uncomfortable as the lie grows. The lying really eats you up inside.' ,
        options:[
            {
                text: 'Next',
                nextText: 4
            },
        ]
    },
    {
        id: 90,
        text: 'One of them gets very excited. They’re also going to Mexico! They ask where you’re going exactly and when. You feel your story is starting to fall apart and you say you have to go to the bathroom just to avoid this conversation. You feel awkward, why did you make up this stupid story? After the break, your friends ask you about how Mexico was and you answer with as short of sentences as you possibly can. You really don’t want them to find out you didn’t actually go...' ,
        options:[
            {
                text: 'Next',
                nextText: 4
            },
        ]
    },
    {
        id: 91,
        text: 'You find a job opening for a food delivery person, to complete this job you must go fill a water bottle from the tap in the basketball courts. You will earn 1 euro for completing the task, if you do it in a timely manner (3 minutes), your customer will tip you an additional 50 cents.' ,
        options:[
            {
                text: 'Accept the job',
                nextText: 3
            },
            {
                text: 'Do not accept the job',
                nextText: 3
            },
        ]
    },
    {
        id: 92,
        text: 'There is a job opening for a creative chef, your job is to find or create a recipe that has the following characteristics; can be made for under 5 euros, can feed a family of 4, is healthy. You will earn 50 cents per characteristic.   ' ,
        options:[
            {
                text: 'Accept the job',
                nextText: 3
            },
            {
                text: 'Do not accept the job',
                nextText: 3
            },
        ]
    },
    {
        id: 93,
        text: 'Job opening for a telemarketer, Ziggo need help gaining more clients for their cable subscriptions. To complete this task, you must call your guide over and try to convince them to subscribe to ziggo cable TV. They will judge you on your persuasiveness. By just accepting this job you will earn 0.5 euros, if your guide deems you persuasive enough them you will earn 2 euros.' ,
        options:[
            {
                text: 'Accept the job',
                nextText: 3
            },
            {
                text: 'Do not accept the job',
                nextText: 3
            },
        ]
    },
    {
        id: 94,
        text: 'There is a job opening for talented photographers and models, in order to prove that you will be good at this job the hiring manager (your guide) requests you to take a picture that will impress them, this can be any picture you feel will impress them [so funny pictures count as well]. You will earn 1 euro for showing the hiring manager a picture, and up to 3 euros depending on how impressed they are.' ,
        options:[
            {
                text: 'Accept the job',
                nextText: 3
            },
            {
                text: 'Do not accept the job',
                nextText: 3
            },
        ]
    },
    {
        id: 95,
        text: 'There is a job opening at the International Labour Organisation. You will need to list 5 famous fashion brands which havent given their employees a minimum wage salary in the last 2 years. You gain 0.5 euros per fashion brand named. Show proof (could be a news article or any other source) to your guide.' ,
        options:[
            {
                text: 'Accept the job',
                nextText: 3
            },
            {
                text: 'Do not accept the job',
                nextText: 3
            },
        ]
    },
    {
        id: 96,
        text: 'There is a job opening for door to door sales person, you must make a phone call to anyone and have a conversation about a product of your interest, tell them a fact about the product to attempt to get them to purchase it. You will earn 1 euro per phone call no matter the outcome, but if you are able to keep the conversation going for at least 1 minute about the product then you will earn 2 euros. Call your guide to check this task.' ,
        options:[
            {
                text: 'Accept the job',
                nextText: 3
            },
            {
                text: 'Do not accept the job',
                nextText: 3
            },
        ]
    },
    {
        id: 97,
        text: 'There is a job opening for a field expert. Choose something you are passionate and knowledgeable about, pick a random person and give them a one minute description of the topic. Record yourself giving the explaination to gain, 2 euros. Without the recording you will earn 0.5 euros.' ,
        options:[
            {
                text: 'Accept the job',
                nextText: 3
            },
            {
                text: 'Do not accept the job',
                nextText: 3
            },
        ]
    },
    {
        id: 98,
        text: 'There is a job opening for audio transcribers, UvA needs your help to transcribe audio lectures to distribute as notes to students. Call your guide over and they will give you a link to a lecture you must transcribe. The audio will only be played once, and you must transcribe 30 seconds of the audio. For an accurate and legible transcription you will earn 1 euro.' ,
        options:[
            {
                text: 'Accept the job',
                nextText: 3
            },
            {
                text: 'Do not accept the job',
                nextText: 3
            },
        ]
    },
    {
        id: 99,
        text: 'There is a job opening for editors, call your guide over and they will give you a link to the wordle archive, you have 1 minute to try and get as many correct words. You will gain 50 cents for every correct word.' ,
        options:[
            {
                text: 'Accept the job',
                nextText: 3
            },
            {
                text: 'Do not accept the job',
                nextText: 3
            },
        ]
    },
    {
        id: 100,
        text: 'There is a job opening for cleaning staff, To complete this task you must pick up any litter in the immediate area, you will earn 0.5 euros for every piece of litter that you collect in 1 minute. Accepting the job will automatically earn you 0.5 euros.' ,
        options:[
            {
                text: 'Accept the job',
                nextText: 3
            },
            {
                text: 'Do not accept the job',
                nextText: 3
            },
        ]
    },
    {
        id: 101,
        text: 'There is a job opening for an entertainer or street artist. You can choose to be a dancer, magician, comedian, musician, or any street art performer. You can earn up to 0.5 euros for every 30 seconds of performance. The performance can last a maximum of two minutes. call your guide over to watch and time the performance.' ,
        options:[
            {
                text: 'Accept the job',
                nextText: 3
            },
            {
                text: 'Do not accept the job',
                nextText: 3
            },
        ]
    },
    {
        id: 102,
        text: 'If you love fitness and the idea of pushing people for their own good. There is a job opening for you as a personal trainer. Motivate someone of your group to do a workout of your choice (sit-ups, push-ups, squats). Every 25 of these that you manage to make them do, you will earn 1 euro. Up to a maximum of 50. If you can convince your guide to do 50 of them instead you can earn 3 euros.' ,
        options:[
            {
                text: 'Accept the job',
                nextText: 3
            },
            {
                text: 'Do not accept the job',
                nextText: 3
            },
        ]
    },
    {
        id: 103,
        text: 'Would you like to plan an event to get to see your group again after this meetup? There is a job opening for an event planner. You must plan an event with an exact date, location, and activity to gain 2 euros. SHare these three elements with your guide to gain the moneyYou can gain an additional 1 euros by sending it to your entire group (your gemstone groupchat). ' ,
        options:[
            {
                text: 'Accept the job',
                nextText: 3
            },
            {
                text: 'Do not accept the job',
                nextText: 3
            },
        ]
    },
    {
        id: 104,
        text: 'There is a job opening at a volunteering recruitment agency. You should search for 5 volunteering positons in the region of Noord-Holland where you want to place your pool of volunuteers. For each position you find you can gain 0.5 euros. They must be available openings and you must show them to your guide.' ,
        options:[
            {
                text: 'Accept the job',
                nextText: 3
            },
            {
                text: 'Do not accept the job',
                nextText: 3
            },
        ]
    },
    {
        id: 105,
        text: 'There is a job opening for a social media activist at a poverty focused NGO, you must submit a potenial social media post to your guide. This post must include some knoweldge you have learnt from the poverty course. You have up to 10 minutes to create the post, and you will earn 2 euros per family member who posts this on their social media account (it can also be a temporary post ). If you do not wish to do so you can earn 0.5 euros per family member who sends this post to a friend.' ,
        options:[
            {
                text: 'Accept the job',
                nextText: 3
            },
            {
                text: 'Do not accept the job',
                nextText: 3
            },
        ]
    },
    
]

startGame()