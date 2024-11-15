export default function totalWeek(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].data.length; j++) {
            arr[i].week += arr[i].data[j];
        }
    }
}