import EventEmitter from 'events';

const alarmSystem = new EventEmitter();

alarmSystem.on('alarm',()=>{
    console.log('(After 3 sec)');
})
alarmSystem.on('alarm',()=>{
    console.log("     ⏰ Wake up! It's time for school 🚀");
})
alarmSystem.on('alarm',()=>{
    console.log("🔥 Don’t be late!");
})



alarmSystem.on('snooze',()=>{
    console.log('(After 5 sec)');
    
})
alarmSystem.on('snooze',()=>{
    console.log('😴 Snoozed for 5 more minutes');
})

setTimeout(()=>{
    alarmSystem.emit('alarm')
},3000);

setTimeout(()=>{
    alarmSystem.emit('snooze')
},5000)