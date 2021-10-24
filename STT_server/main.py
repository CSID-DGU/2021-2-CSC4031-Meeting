from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import List
import pyaudio
import wave
import numpy as np
from multiprocessing import Process
from multiprocessing import Pool
import os
import make_audio
import audio_stt


app = FastAPI()

origins = [
    "*"
]
# "http://localhost"

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"],
)


@app.get("/")
async def root():
    return {"message": "Hello World"}


## 멀티프로세싱을 사용하여 p1 오디오 파일은 계속해서 만들고
## 오디오 파일이 생성되면 STT 작업 실행
## 두가지 작업 병렬처리를 통해 끊김  최소화


if __name__ == "__main__":
    file_name="test"
    num_cores=2
    pool = Pool(num_cores)
    p1 = Process(target=make_audio.audio ,args=(file_name,)) # 첫번쨰 프로세스
    p2 = Process(target=audio_stt.stt ,args=(file_name,))  # 두번쨰 프로세스

    p1.start()
    p2.start()

    p1.join()
    p2.join()

