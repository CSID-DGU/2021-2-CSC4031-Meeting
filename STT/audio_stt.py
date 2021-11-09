import pyaudio
import wave
import numpy as np
from google.cloud import speech
import io
import os
import json


## 생성된 오디오 파일이 존재하면 계쏙해서 STT 실행 하는 함수
def stt(file_name):
    count=0
    while(True):
        if(os.path.isfile(file_name+str(count))):
            transcribe_file(file_name+str(count))
            os.remove(file_name+str(count))                   ## 변역이 끝난 함수는 용량 최소화를 위해 삭제
            count+=1



## 생성된 오디오 파일을 넣어주면 구글 STT서버로 보내서 서버에서 변환한 후 텍스트로 변환해주는 코드
def transcribe_file(speech_file):
    """Transcribe the given audio file."""
    client = speech.SpeechClient()
    with io.open(speech_file, "rb") as audio_file:
        content = audio_file.read()
    audio = speech.RecognitionAudio(content=content)
    config = speech.RecognitionConfig(
        encoding=speech.RecognitionConfig.AudioEncoding.LINEAR16,
        sample_rate_hertz=16000,
        language_code="ko-KR",
    )

    response = client.recognize(config=config, audio=audio)               ## response 결과값 받아온 것

    # Each result is for a consecutive portion of the audio. Iterate through
    # them to get the transcripts for the entire audio file.
    for result in response.results:                                      ## 결과값 받아서 텍스트로 변환해주기
        # The first alternative is the most likely one for this portion.
        result = result.alternatives[0].transcript
        print(u"Transcript: {}".format(result))

    ## 여기서 이제 만들어진 텍스트를 유은님께 보낼 형식으로 변환후 전송하는 코드 추가