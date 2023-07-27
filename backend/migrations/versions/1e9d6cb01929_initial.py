"""initial

Revision ID: 1e9d6cb01929
Revises: 38fbe6787849
Create Date: 2023-07-27 10:37:38.745956

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1e9d6cb01929'
down_revision = '38fbe6787849'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('country_info',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('country_id', sa.Integer(), nullable=False),
    sa.Column('president', sa.String(), nullable=False),
    sa.Column('capital', sa.String(), nullable=False),
    sa.Column('language', sa.String(), nullable=False),
    sa.Column('valuta', sa.String(), nullable=False),
    sa.ForeignKeyConstraint(['country_id'], ['country.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.drop_column('country', 'capital')
    op.drop_column('country', 'currency')
    op.drop_column('country', 'language')
    op.drop_column('country', 'president')
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('country', sa.Column('president', sa.VARCHAR(), autoincrement=False, nullable=False))
    op.add_column('country', sa.Column('language', sa.VARCHAR(), autoincrement=False, nullable=False))
    op.add_column('country', sa.Column('currency', sa.VARCHAR(), autoincrement=False, nullable=False))
    op.add_column('country', sa.Column('capital', sa.VARCHAR(), autoincrement=False, nullable=False))
    op.drop_table('country_info')
    # ### end Alembic commands ###
