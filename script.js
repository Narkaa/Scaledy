let direction = 'engToMong';

const engToMong = {
    'hello': 'сайн байна уу',
    'yes': 'тийм',
    'no': 'үгүй'
};

const mongToEng = Object.fromEntries(
    Object.entries(engToMong).map(([en, mn]) => [mn, en])
);

function translate() {
    const input = document.getElementById('inputText').value.trim().toLowerCase();
    let result = '';
    if (direction === 'engToMong') {
        result = engToMong[input] || 'Translation not found';
    } else {
        result = mongToEng[input] || 'Translation not found';
    }
    document.getElementById('outputText').innerText = result;
}

function toggleDirection() {
    direction = direction === 'engToMong' ? 'mongToEng' : 'engToMong';
    if (direction === 'engToMong') {
        document.getElementById('toggleBtn').innerText = 'Switch to Mongolian → English';
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    } else {
        document.getElementById('toggleBtn').innerText = 'Switch to English → Mongolian';
        document.body.classList.remove('light');
        document.body.classList.add('dark');
    }
}

document.getElementById('translateBtn').addEventListener('click', translate);
document.getElementById('toggleBtn').addEventListener('click', toggleDirection);
