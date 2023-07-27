from sqlalchemy import JSON, Column, Integer, String, insert, ForeignKey
from sqlalchemy.orm import relationship
from backend.db.base import Base, async_session_maker
from sqlalchemy import select


class Country(Base):
    __tablename__ = 'country'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)

    info = relationship("Infos", back_populates="infos")


class CountryInfo(Base):
    __tablename__ = "country_info"

    id = Column(Integer, primary_key=True)
    country_id = Column(ForeignKey("country.id"), nullable=False)
    president = Column(String, nullable=False)
    capital = Column(String, nullable=False)
    language = Column(String, nullable=False)
    valuta = Column(String, nullable=False)

    country = relationship("Country", back_populates="country")
