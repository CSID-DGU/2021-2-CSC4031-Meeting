from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import List
# import pyaudio
# import wave
# import numpy as np
# from multiprocessing import Process
# from multiprocessing import Pool
# import os
# import make_audio
# import audio_stt
from pyrouge import Rouge155
import torch
import numpy as np
from models import data_loader, model_builder
from models.model_builder import Summarizer
from others.logging import logger, init_logger
from models.data_loader import load_dataset
from transformers import BertConfig, BertTokenizer
from tensorboardX import SummaryWriter
from models.reporter import ReportMgr
from models.stats import Statistics
import easydict


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

summarization = ['자 지도 한번 보실께요 자 중국이 있고 우리나라가 있고 이렇게 일본이 펼쳐집니다.', '자 이런 상황에서 일본이 드디어 우리나라를 침공을 한 겁니다', '이제 중국도 쳐들어 가려고 했던 거죠 그런데 세상에 우리 선조가 상상도 하지 못한 업적을 남기시죠']


@app.get("/summary", status_code=200, response_description="summary successfully retrived")
def get_summary():
    return summarization

