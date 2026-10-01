"""Generate original, dependency-free PCM assets for the guild."""
import math, struct, wave
from pathlib import Path
RATE=22050
OUT=Path(__file__).resolve().parent.parent/'assets'
def hz(m): return 440*2**((m-69)/12)
def write(name, duration, notes):
    n=int(duration*RATE); left=[0.0]*n;right=[0.0]*n
    for start,length,midi,amp,pan,kind in notes:
        freq=hz(midi); begin=int(start*RATE); count=int(length*RATE)
        for j in range(min(count,n-begin)):
            t=j/RATE
            if kind=='bell':
                env=min(1,t/.008)*math.exp(-t*4/max(length,.2))
                val=(math.sin(2*math.pi*freq*t)+.22*math.sin(2*math.pi*freq*2*t)+.08*math.sin(2*math.pi*freq*3*t))*env
            else:
                env=min(1,t/.12)*min(1,(length-t)/.25)
                val=(math.sin(2*math.pi*freq*t)+.16*math.sin(2*math.pi*freq*2*t))*env
            left[begin+j]+=val*amp*(1-pan)*.7;right[begin+j]+=val*amp*(1+pan)*.7
    peak=max(max(abs(x) for x in left),max(abs(x) for x in right),1)
    with wave.open(str(OUT/(name+'.wav')),'wb') as f:
        f.setnchannels(2);f.setsampwidth(2);f.setframerate(RATE)
        f.writeframes(b''.join(struct.pack('<hh',int(max(-1,min(1,l/peak))*28000),int(max(-1,min(1,r/peak))*28000)) for l,r in zip(left,right)))
beat=.5; notes=[]
chords=[(48,55,60,64),(45,52,57,60),(53,60,65,69),(43,50,55,59)]*2
melody=[[72,76,79,76,74,72,67,71],[72,76,81,79,76,72,71,69],[69,72,77,76,74,72,69,67],[71,74,79,77,74,71,67,72]]*2
for bar,chord in enumerate(chords):
    base=bar*4
    for k,m in enumerate(chord):notes.append((base,3.95,m,.032,(k-1.5)*.25,'pad'))
    for k in range(8):notes.append((base+k*beat,.48,chord[1+k%3]+12,.06,(-.3 if k%2 else .3),'bell'))
    for k,m in enumerate(melody[bar]):notes.append((base+k*beat,.85,m,.1,0,'bell'))
write('guild-theme',32,notes)
write('success',1.05,[(i*.12,.65,m,.22,0,'bell') for i,m in enumerate([72,76,79,84])])
write('discover',.8,[(0,.6,67,.18,-.15,'bell'),(.16,.6,72,.15,.15,'bell')])
write('complete',1.9,[(i*.17,.8,m,.19,0,'bell') for i,m in enumerate([60,64,67,72,76,79,84])])
write('page',.35,[(0,.3,79,.07,0,'bell')])
print('Generated original BGM and four sound effects in assets/')
