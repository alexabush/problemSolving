function inArray(str1, str2) {
  const strArr = [];
  for (let i = 0; i < str2.length; i++) {
    for (let j = 0; j < str1.length; j++) {}
  }
}

const a1 = ['arp', 'live', 'strong', 'sharper'];
const a2 = ['lively', 'harp', 'sharp', 'armstrong', 'ham'];
const a3 = ['hammer', 'olive', 'string'];
const a4 = ['sharper', 'live', 'strong', 'arp'];

inArray(a1, a2); // ["arp", "live", "strong"]
inArray(a2, a1); // ["harp", "sharp"]
inArray(a1, a3); // ["live"]
inArray(a2, a3); // ["ham"]
inArray(a3, a2); // []
inArray(a4, a2); // ["arp", "live", "strong"]
