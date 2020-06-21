function solution(A) {
    const N = A.length;
    if(N < 3) return 0;

    let peaks = [];

    for(let i = 1; i < N-1; i++) {
        if(A[i] > A [i-1] && A[i] > A[i+1]) peaks.push(i);
    }

    const peakN = peaks.length;
    if(peakN === 0) return 0; 


   for(let i = peakN; i >= 2; i--) {
        if(N % i === 0) {
            const K = N / i;
            let idx = 0;

            for(let i in peaks) {
                let start = idx * K;
                let end = (idx + 1) * K;
                if(peaks[i] >= start && peaks[i] < end) {
                    idx++;    
                }
            }

            if(idx === i) return i;
        }
   }

   return 1;
}