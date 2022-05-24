let user_name = prompt (`What is your name?`)
let user_bday = prompt (`Welcome to Zodiac Calculator ${user_name}!\n\n Please enter your birthday in this format: DD-MM-YYYY`)
let user_date = parseInt(user_bday.charAt(0)+user_bday.charAt(1))
let user_month = parseInt(user_bday.charAt(3)+user_bday.charAt(4))
let user_year = parseInt(user_bday.charAt(6)+user_bday.charAt(7)+user_bday.charAt(8)+user_bday.charAt(9))
let age = 2022 - user_year - 1
if (user_month <= 05 && user_date <= 24) {
    age+=1
}
if (user_month>12 || user_year>2022 || user_date>31 || user_date<=0 || user_month === 02 && user_date > 29) {
    alert('Invalid input! Please try again.')
}

if (user_month === 02 && user_date === 29) {
    alert ('You are born on a leap day! \n\n Press ok to see your age and zodiac sign.' )
}
else if (user_year%4 === 0) {
    alert ('You are born on a leap year! \n\n Press ok to see your age and zodiac sign.')
}

if (user_date >= 21 && user_date <= 31 && user_month === 03 ||  user_date >= 1 && user_date <= 20 && user_month === 04)
{
    alert(`Age: ${age} \n\n Your zodiac sign is Aries, a fire sign. Represented by the ram, Aries loves to be number one. Bold and ambitious, they dive headfirst into even the most challenging situations - and always strive to make sure they come out on top!`) 
}
else if (user_date >= 20 && user_date <= 30 && user_month === 04 ||  user_date >= 1 && user_date <= 21 && user_month === 05)
{
    alert(`Age: ${age} \n\nYour zodiac sign is Taurus, an earth sign. Taureans, like the bull that represents them, are known to be intelligent, dependable, hardworking, dedicated, and stubborn. They also prioritize consistency and reliability in all areas of their lives.`) 
}
else if (user_date >= 21 && user_date <= 31 && user_month === 05 ||  user_date >= 1 && user_date <= 21 && user_month === 06)
{
    alert(`Age: ${age} \n\nYour zodiac sign is Gemini, an air sign. Spontaneous, playful, and adorably erratic, Gemini is driven by its endless curiosity. Appropriately symbolized by the celestial twins, Geminis are known for easily adapting to new situations and people. `) 
}
else if (user_date >= 21 && user_date <= 30 && user_month === 06 ||  user_date >= 1 && user_date <= 23 && user_month === 07)
{
    alert(`Age: ${age} \n\nYour zodiac sign is Cancer, a water sign. Represented by the crab, Cancers are loyal, highly intuitive, sensitive and extremely protective of themselves and their loved ones. `) 
}
else if (user_date >= 23 && user_date <= 31 && user_month === 07 ||  user_date >= 1 && user_date <= 23 && user_month === 08)
{
    alert(`Age: ${age} \n\nYour zodiac sign is Leo, a fire sign. Represented by the lion, Leos are natural leaders and love to have the spotlight to themselves. They are also known to be ambitious and determined and are fearless optimists who refuse to accept failure.  `) 
}
else if (user_date >= 23 && user_date <= 31 && user_month === 08 ||  user_date >= 1 && user_date <= 23 && user_month === 09)
{
    alert(`Age: ${age} \n\nYour zodiac sign is Virgo, an earth sign. Virgos are logical, practical, and systematic in their approach to life. Virgos are represented by the goddess of wheat and agriculture and are perfectionists at heart. `) 
}
else if (user_date >= 23 && user_date <= 30 && user_month === 09 ||  user_date >= 1 && user_date <= 23 && user_month === 10)
{
    alert(`Age: ${age} \n\nYour zodiac sign is Libra, a air sign . Libras, represented by the scales, are intent on bringing balance, harmony, and justice to their lives. They are also obsessed with symmetry and strive to create equilibrium in all areas of life.`) 
}
else if (user_date >= 23 && user_date <= 31 && user_month === 10 ||  user_date >= 1 && user_date <= 22 && user_month === 11)
{
    alert(`Age: ${age} \n\nYour zodiac sign is Scorpio, a water sign. Elusive and mysterious, Scorpios are represented by the scorpion and are one of the most misunderstood signs of the zodiac. Life is a game of chess for Scorpios as they plot their every move in advance and they are willing to work hard in order to achieve their goals.`)
}
else if (user_date >= 23 && user_date <= 30 && user_month === 11 ||  user_date >= 1 && user_date <= 22 && user_month === 12)
{
    alert(`Age: ${age} \n\nYour zodiac sign is Sagittarius, a fire sign. Represented by the Archer, Sagittarians are always on a quest for knowledge. They are also very brave and love going on adventures. `) 
}
else if (user_date >= 22 && user_date <= 31 && user_month === 12 ||  user_date >= 1 && user_date <= 20 && user_month === 01)
{
    alert(`Age: ${age} \n\nYour zodiac sign is Capricorn, an earth sign. Capricorn is symbolized by the sea goat, a mythological creature with the body of a goat and tail of a fish. Capricorns are determined to overcome whatever stands in their way. They usually focus on long-term goals and hate dealing with annoying details and unnecessary additives.  `) 
}
else if (user_date >= 20 && user_date <= 31 && user_month === 01 ||  user_date >= 1 && user_date <= 19 && user_month === 02)
{
    alert(`Age: ${age} \n\nYour zodiac sign is Aquarius, an air sign. Innovative, progressive and shamelessly revolutionary, Aquarius is intent on making the world a better place. Aquarians are represented by the water bearer, who bestows life upon the land. `) 
}
else if (user_date >= 19 && user_date <= 29 && user_month === 02 ||  user_date >= 1 && user_date <= 20 && user_month === 03)
{
    alert(`Age: ${age} \n\nYour zodiac sign is Pisces, a water sign. Pisces is the most intuitive, sensitive and empathetic sign of the entire zodiac and is symbolized by two fish swimming in opposite directions, representing the constant division of a Pisces attention between fantasy and reality. `) 
}

alert('Thank you for using the Zodiac Calculator! To use again, simply reload this page!')