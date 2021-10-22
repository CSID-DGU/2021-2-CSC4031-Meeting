import pyaudio
import wave
import numpy as np
from google.cloud import speech
import io
import os




## 코드를 실행 시키면 오디오 파일을 계속 생성
def audio(file_name):
    count=0
    while(True):
        make_audiofile(file_name+str(count))
        count+=1



## 지정해준 파일 이름으로 오디오 파일 생성
def make_audiofile(file_name):

    CHUNK = 1024
    FORMAT = pyaudio.paInt16
    CHANNELS = 1
    RATE = 16000
    RECORD_SECONDS = 5
    WAVE_OUTPUT_FILENAME = file_name

    p = pyaudio.PyAudio()
    stream = p.open(format=FORMAT,channels=CHANNELS,rate=RATE,input=True,
                    frames_per_buffer=CHUNK, input_device_index=2)   # index 2 = 로컬 사운드

    #print("Start")
    frames=[]
    for i in range(0, 100):
        data=stream.read(CHUNK)
        frames.append(data)

    #print("Recording is finished.")

    ## 로컬 사운드를 wave 파일로 변환

    wf = wave.open(WAVE_OUTPUT_FILENAME, 'wb')
    wf.setnchannels(CHANNELS)
    wf.setsampwidth(p.get_sample_size(FORMAT))
    wf.setframerate(RATE)
    wf.writeframes(b''.join(frames))
    wf.close()
    file_name = os.path.join(os.path.dirname(__file__), ".",WAVE_OUTPUT_FILENAME)

    return file_name

    stream.stop_stream()
    stream.close()
    p.terminate()
